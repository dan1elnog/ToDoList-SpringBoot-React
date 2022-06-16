package com.api.api.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.api.api.model.TaskModel;


public class TaskModelDto {

    private int id;
    private String task;
    private boolean completed;

    public TaskModelDto(TaskModel task) {
        this.id = task.getId();
        this.task = task.getTask();
        this.completed = task.isCompleted();
    }
    public int getId() {
        return id;
    }
    public String getTask() {
        return task;
    }
    public boolean isCompleted() {
        return completed;
    }

    public static List<TaskModelDto> conversor(List<TaskModel> tasks){
        return tasks.stream().map(TaskModelDto::new).collect(Collectors.toList());
    }

    
}
