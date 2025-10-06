package com.kishan.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kishan.portfolio.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

}
