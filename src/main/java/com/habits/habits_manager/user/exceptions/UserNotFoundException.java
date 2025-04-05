package com.habits.habits_manager.user.exceptions;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String id) { super("Resource not found. id:  " + id);}
}
