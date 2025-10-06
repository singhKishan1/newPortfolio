package com.kishan.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kishan.portfolio.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}
