package com.adithya.main.config;
/**
 * Smart-Library API @ 2021
 */
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.adithya.main.service.UserService;



@Configuration
@EnableWebSecurity
@CrossOrigin(origins = "http://localhost:3000")
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	@Autowired
	private UserService userService;
	@Bean
	public  BCryptPasswordEncoder passwordEncoder() {
		return  new BCryptPasswordEncoder();
		
	}
	
	
	@Bean
	public DaoAuthenticationProvider authenticationProvideer() {
		DaoAuthenticationProvider auth =new DaoAuthenticationProvider();
	auth.setUserDetailsService(userService);
		auth.setPasswordEncoder(passwordEncoder());
		return auth;
	}
	
	

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// TODO Auto-generated method stub
		auth.authenticationProvider(authenticationProvideer());
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// TODO Auto-generated method stub
		http.authorizeRequests().antMatchers(
				"/registration**",
				"/js/**",
				"/css/**",
				"/img/**"
				).permitAll()
		.anyRequest()
		.authenticated()
		.and()
		.formLogin()
		.loginPage("/login")
		.permitAll()
		.and()
		.logout()
		.invalidateHttpSession(true)
		.clearAuthentication(true)
		.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
		.logoutSuccessUrl("/login?logout")
		.permitAll()
		
		;
	}
	
	
	

}
