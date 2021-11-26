package com.adithya.main.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adithya.main.model.Book;
import com.adithya.main.repository.BookRepository;


@RequestMapping("api/v1")
@CrossOrigin(origins = "http://localhost:8080")
@RestController
public class BookController {
	@Autowired
	private BookRepository  book;
	//get all employees
	@GetMapping("/books")
	public List<Book> getAllBooks(){
		return book.findAll();
	}
}
