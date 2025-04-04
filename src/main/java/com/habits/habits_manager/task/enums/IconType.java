package com.habits.habits_manager.task.enums;

import lombok.Getter;

@Getter
public enum IconType {
    WALK("walk"),
    BRIEFCASE("briefcase"),
    GYM("gym"),
    BOOK("book"),
    DROP("drop"),
    MEDITATE("meditate"),
    SLEEP("sleep"),
    CIRCLE("circle");

    private final String value;

    IconType(String value) {
        this.value = value;
    }
}
