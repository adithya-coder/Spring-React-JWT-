package com.adithya.main.web.dto;
/**
 * Smart-Library API @ 2021
 */
public class UserRegistrationDto {

	private String fristName;
	private String lastName;
	private String email;
	private String password;
	
	
	/**
	 * 
	 */
	public UserRegistrationDto() {
		super();
		
	}


	/**
	 * @param fristName
	 * @param lastName
	 * @param email
	 * @param password
	 */
	public UserRegistrationDto(String fristName, String lastName, String email, String password) {
		super();
		this.fristName = fristName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}


	public String getFristName() {
		return fristName;
	}


	public void setFristName(String fristName) {
		this.fristName = fristName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	
	
	
	
	
	
}
