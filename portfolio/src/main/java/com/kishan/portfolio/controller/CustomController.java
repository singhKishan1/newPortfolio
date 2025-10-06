package com.kishan.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomController {
    
    @GetMapping("/home")
    public String home(){
        return "Hello World";
    }

}
