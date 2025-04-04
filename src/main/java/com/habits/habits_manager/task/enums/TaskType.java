package com.habits.habits_manager.task.enums;

import lombok.Getter;

@Getter
public enum TaskType {
    MOVEMENT("Movement"),
    ACTIVE_MIND("ActiveMind"),
    RECHARGE("Recharge"),
    NONE("");

    private final String value;

    TaskType(String value) {
        this.value = value;
    }
}
