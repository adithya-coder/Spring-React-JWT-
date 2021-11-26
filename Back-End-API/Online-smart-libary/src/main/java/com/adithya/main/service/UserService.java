package com.adithya.main.service;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.adithya.main.model.User;
import com.adithya.main.web.dto.UserRegistrationDto;
/**
 * Smart-Library API @ 2021
 */
public interface UserService extends UserDetailsService{
	User save(UserRegistrationDto regDto);

}