package com.kishan.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kishan.portfolio.model.Contact;
import com.kishan.portfolio.repository.ContactRepository;
import com.kishan.portfolio.service.EmailService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {
    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping("/sendMessage")
    public String sendMessage(@RequestBody Contact contact) {
        try {
            contactRepository.save(contact);
            return emailService.sendEmail(contact.getEmail(), contact.getSubject(), contact.getMessage());
        } catch (Exception e) {
            return "Error sending message: " + e.getMessage();
        }
    }
}
