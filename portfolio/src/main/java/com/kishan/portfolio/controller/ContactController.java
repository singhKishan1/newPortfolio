package com.kishan.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kishan.portfolio.model.Contact;
import com.kishan.portfolio.repository.ContactRepository;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {
    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/sendMessage")
    public String sendMessage(@RequestBody Contact contact) {
        try {
            contactRepository.save(contact);
        } catch (Exception e) {
            return "Error sending message: " + e.getMessage();
        }
        return "Message sent successfully!";
    }
}
