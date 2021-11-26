package com.adithya.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.adithya.main.model.Book;
@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {

}
