package com.adithya.main.service;
/**
 * Smart-Library API @ 2021
 */
import java.util.Arrays;
import java.util.Collection;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.adithya.main.model.Role;
import com.adithya.main.model.User;
import com.adithya.main.repository.UserRepository;
import com.adithya.main.web.dto.UserRegistrationDto;

@Service
public class UserServiceImpl implements UserService {
 
   private UserRepository userRepository;
   @Autowired
  
   private BCryptPasswordEncoder passwordEncoder;
 
	/**
 * @param userRepository
 */
public UserServiceImpl(UserRepository userRepository) {
	super();
	this.userRepository = userRepository;
}

	@Override
	public User save(UserRegistrationDto regDto) {
		User user = new User(regDto.getFristName(),regDto.getLastName(),regDto.getEmail(),
				passwordEncoder.encode(regDto.getPassword()),
				Arrays.asList(new Role("ROLE_USER")));
		return userRepository.save(user);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = this.userRepository.findByEmail(username);
		if(user==null) {
			throw new UsernameNotFoundException("Invalid username or password");
			
		}
		return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(),mapRolesToAuthorities(user.getRoles()));
		
		
	}
	
	private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles){
		
		return roles.stream()
		.map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
		
		
	}

}
