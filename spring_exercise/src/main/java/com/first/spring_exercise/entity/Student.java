package com.first.spring_exercise.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "students")
public class Student {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    private Integer age;
    
    private String course;
    
    public Student() {}
    
    public Student(String name, String email, Integer age, String course) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.course = course;
    }
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }
    
    public String getCourse() { return course; }
    public void setCourse(String course) { this.course = course; }
}