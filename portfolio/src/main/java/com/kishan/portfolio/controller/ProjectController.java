package com.kishan.portfolio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kishan.portfolio.model.Project;
import com.kishan.portfolio.service.ProjectService;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @GetMapping("/all")
    public List<Project> getAllProjects(){
        return projectService.getAllProjects();
    }
}
