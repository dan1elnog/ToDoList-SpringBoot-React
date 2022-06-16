package com.api.api.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.api.dto.TaskForm;
import com.api.api.dto.TaskModelDto;
import com.api.api.model.TaskModel;
import com.api.api.repository.TaskRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping(path = "api")
@CrossOrigin
public class TaskController{

    @Autowired
    private TaskRepository taskRepository ;

    @GetMapping()
    public List<TaskModelDto> getAll(){
        List<TaskModel> task = taskRepository.findAll();
        return  TaskModelDto.conversor(task);
    }

    @GetMapping(path = "/{id}")
    public Optional<TaskModel> getById(@PathVariable int id) {
        Optional<TaskModel> task = taskRepository.findById(id);
        return task;
    }
    

    @PostMapping
    public TaskModel post(@RequestBody TaskForm task){
        TaskModel newTask = task.conversor();
        return taskRepository.save(newTask);
    }

    @PutMapping(path = "/{id}")
    public TaskModel update(@RequestBody TaskModel newTask, @PathVariable int id){
        return taskRepository.findById(id)
            .map(task -> {
                task.setTask(newTask.getTask());
                task.setCompleted(newTask.isCompleted());
                return taskRepository.save(task);
            })
            .orElseGet(() -> {
                newTask.setId(id);
                return taskRepository.save(newTask);
            });
    }

    @DeleteMapping(path = "/{id}")
    public void delete(@PathVariable int id){
        taskRepository.deleteById(id);;
    }
    
} 