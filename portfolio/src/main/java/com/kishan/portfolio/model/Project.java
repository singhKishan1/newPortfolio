package com.kishan.portfolio.model;

import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Project {
    @Id
    private Long id;
    private String title;
    private String description;
    private String githubLink;
    private String liveLink;
    private String imageUrl;

    @ElementCollection
    @CollectionTable(name = "project_tech")
    private List<String> tech;
}
