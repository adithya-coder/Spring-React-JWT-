package com.adithya.main.model;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

/**
 * Smart-Library API @ 2021
 */

@Entity
@Table(name="user",uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class User {
	
	@Id
	  @GeneratedValue(strategy= GenerationType.IDENTITY)
		private Long id;
	  @Column(name="frist_name")
		private String fristName;
	  
	  @Column(name="last_name")
		private String lastName;
	  
	    private String proImg;
	  
		
		private String email;

		@NotBlank(message = "Please provide your password")
		@Pattern(regexp = "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$", message = "Password should be contains a-z, A-Z, 0-9 and special character.")
		private String password;
		@ManyToMany(fetch =FetchType.EAGER,cascade=CascadeType.ALL)
		@JoinTable(
				name="user_roles",
				joinColumns= @JoinColumn(name="user_id",referencedColumnName="id"),
				inverseJoinColumns =  @JoinColumn(name="role_id",referencedColumnName = "id")
				)
		private Collection<Role> roles;
		/**
		 * 
		 */
		public User() {
			super();
			// TODO Auto-generated constructor stub
		}
		/**
		 * @param fristName
		 * @param lastName
		 * @param email
		 * @param password
		 * @param roles
		 */
		public User(String fristName, String lastName, String email, String password, Collection<Role> roles) {
			super();
			this.fristName = fristName;
			this.lastName = lastName;
			this.email = email;
			this.password = password;
			this.roles = roles;
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
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
		
		public String getProImg() {
			return proImg;
		}
		public void setProImg(String proImg) {
			this.proImg = proImg;
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
		public Collection<Role> getRoles() {
			return roles;
		}
		public void setRoles(Collection<Role> roles) {
			this.roles = roles;
		}
		
		
		


}
