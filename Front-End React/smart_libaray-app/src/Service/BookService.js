import axios from 'axios';
const BOOK_API_BASE_URL="http://localhost:8080/api/v1/books";
class BookService{
    
getBooks(){
    return axios.get(BOOK_API_BASE_URL);
}

createBook(Book){
    return axios.post(BOOK_API_BASE_URL,Book);
}
upload(data) {
    return axios.post("http://localhost:8080/api/v1/upload/", data);
}

uploadf(pdf) {
    return axios.post("http://localhost:8080/api/v1/upload/pdf/", pdf);
}
getImage(data){
    return axios.get("http://localhost:8080/api/v1/download/5.PNG", data);
}

getBookById(isbn){
    return axios.get(BOOK_API_BASE_URL+'/'+isbn);
}

updateBook(Book,isbn){
    return axios.put(BOOK_API_BASE_URL+'/'+isbn,Book);
}

deleteEmployee(isbn){
    return axios.delete(BOOK_API_BASE_URL+'/'+isbn)
}
}

export default new BookService()