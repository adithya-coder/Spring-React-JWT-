package com.adithya.main.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Book")
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int isbn;
	
 private String name;
 private  String author;
 private String edition;
 @Column(name = "cover_url")
 private String cover_url;
 @Column(name = "pdf_url")
 private String pdf_url;
 @Column(length = 1000)
 private String desctiption;
/**
 * 
 */
public Book() {
	super();
	// TODO Auto-generated constructor stub
}
/**
 * @param isbn
 * @param name
 * @param author
 * @param edition
 * @param cover_url
 * @param pdf_url
 * @param desctiption
 */
public Book(int isbn, String name, String author, String edition, String cover_url, String pdf_url,
		String desctiption) {
	super();
	this.isbn = isbn;
	this.name = name;
	this.author = author;
	this.edition = edition;
	this.cover_url = cover_url;
	this.pdf_url = pdf_url;
	this.desctiption = desctiption;
}
public int getIsbn() {
	return isbn;
}
public void setIsbn(int isbn) {
	this.isbn = isbn;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getAuthor() {
	return author;
}
public void setAuthor(String author) {
	this.author = author;
}
public String getEdition() {
	return edition;
}
public void setEdition(String edition) {
	this.edition = edition;
}
public String getCover_url() {
	return cover_url;
}
public void setCover_url(String cover_url) {
	this.cover_url = cover_url;
}
public String getPdf_url() {
	return pdf_url;
}
public void setPdf_url(String pdf_url) {
	this.pdf_url = pdf_url;
}
public String getDesctiption() {
	return desctiption;
}
public void setDesctiption(String desctiption) {
	this.desctiption = desctiption;
}
@Override
public String toString() {
	return "Book [isbn=" + isbn + ", name=" + name + ", author=" + author + ", edition=" + edition + ", cover_url="
			+ cover_url + ", pdf_url=" + pdf_url + ", desctiption=" + desctiption + "]";
}
	
 
 

}
