package com.adithya.main.web;
/**
 * Smart-Library API @ 2021
 */
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Controller
@CrossOrigin(origins = "http://localhost:8080")

public class MainController {

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(Model model) {
		model.addAttribute("title", "Home | Smart Book");
		return "login";
	}
  @GetMapping("/")
  public String home() {
	  return "index";
  }
}
