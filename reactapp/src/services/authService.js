const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  login(email, password) {
    return fetch(API_URL + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => {
          throw new Error(text || 'Login failed');
        });
      }
      return response.json();
    })
    .then(data => {
      if (data.token) {
        localStorage.setItem('user', JSON.stringify(data));
      }
      return data;
    });
  }

  register(firstName, lastName, email, password) {
    return fetch(API_URL + 'register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email, password })
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => {
          throw new Error(text || 'Registration failed');
        });
      }
      return response.json();
    })
    .then(data => {
      if (data.token) {
        localStorage.setItem('user', JSON.stringify(data));
      }
      return data;
    });
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isAuthenticated() {
    const user = this.getCurrentUser();
    return user && user.token;
  }
}

export default new AuthService();