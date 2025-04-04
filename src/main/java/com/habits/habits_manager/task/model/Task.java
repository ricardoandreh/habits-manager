package com.habits.habits_manager.task.model;

import com.habits.habits_manager.task.enums.IconType;
import com.habits.habits_manager.task.enums.TaskType;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity(name = "tb_task")
@Table(name = "tb_task")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Task implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String title;
    private String time;
    private String location;
    private String duration;
    private IconType icon;
    private String color;
    private boolean completed;
    private TaskType type;
}
