package com.neurofleetx.service;

import com.neurofleetx.config.JwtUtils;
import com.neurofleetx.dto.AuthResponse;
import com.neurofleetx.dto.LoginRequest;
import com.neurofleetx.dto.RegisterRequest;
import com.neurofleetx.model.User;
import com.neurofleetx.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtils;

    public AuthResponse login(LoginRequest loginRequest) {
        try {
            User user = userRepository.findByEmail(loginRequest.getEmail())
                    .orElseThrow(() -> new RuntimeException("Invalid credentials"));

            if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                throw new RuntimeException("Invalid credentials");
            }

            String jwt = jwtUtils.generateJwtToken(user.getEmail());
            return new AuthResponse(jwt, user.getId(), user.getFirstName(), 
                    user.getLastName(), user.getEmail(), user.getRole().name());
        } catch (Exception e) {
            throw new RuntimeException("Invalid credentials");
        }
    }

    public AuthResponse register(RegisterRequest registerRequest) {
        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            throw new RuntimeException("Email is already taken!");
        }

        User user = new User(registerRequest.getFirstName(), registerRequest.getLastName(),
                registerRequest.getEmail(), passwordEncoder.encode(registerRequest.getPassword()));

        userRepository.save(user);

        String jwt = jwtUtils.generateJwtToken(user.getEmail());
        return new AuthResponse(jwt, user.getId(), user.getFirstName(),
                user.getLastName(), user.getEmail(), user.getRole().name());
    }
}