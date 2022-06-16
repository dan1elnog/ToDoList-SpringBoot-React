package com.api.api.dto;

import com.api.api.model.TaskModel;

public class TaskForm {
    
    private String task;
    private boolean completed;

    public String getTask() {
        return task;
    }
    public void setTask(String task) {
        this.task = task;
    }
    public boolean isCompleted() {
        return completed;
    }
    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public TaskModel conversor(){
        return new TaskModel(task, completed);
    }
}
