package com.api.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tasks")
public class TaskModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String task;

    private boolean completed;

    public TaskModel(String task, boolean completed) {
        this.task = task;
        this.completed = completed;
    }

    public TaskModel(){}

    public TaskModel(String task) {
        this.task = task;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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

    
}
