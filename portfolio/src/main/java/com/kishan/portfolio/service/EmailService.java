package com.kishan.portfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private NotificationService notificationService;

    public String sendEmail(String from, String subject, String body) {
        // Logic to send email
        System.out.println("Sending email from: " + from);
        String to = "k7820666@gmail.com";
        System.out.println("Subject: " + subject);
        System.out.println("Body: " + body);

        // Notify after sending email
        notificationService.sendNotificationEmail(from, to, subject, body);
        return "Email sent to " + to;
    }

}
