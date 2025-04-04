package com.habits.habits_manager.user.enums;

import lombok.Getter;

@Getter
public enum UserRole {
    ADMIN("admin"),

    USER("user");

    private String role;

    UserRole(String role) {
        this.role = role;
    }
}
