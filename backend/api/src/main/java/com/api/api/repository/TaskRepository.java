package com.api.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.api.model.TaskModel;

public interface TaskRepository extends JpaRepository<TaskModel, Integer>{
    
}
