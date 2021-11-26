import React, { Component } from 'react';
import BookService from '../Service/BookService';





class HomeComponent extends Component {
    constructor(props) {
      super(props);
      this.state ={
        Book:[]
      }
  
    }
    componentDidMount(){
      BookService.getBooks().then((res)=>{
          this.setState({Book:res.data});
      })
  }
   
    

    render() {
        
        return (
          <div  >
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <br />
            <br />
            <div className="container">
  <div class="row row-cols-2 row-cols-md-4">
    
  {
         this.state.Book.map( Book=>


          <div>
  <div class="col mb-4">
    
    <div class="card">

      <div class="view overlay">

 <img class="card-img-top" src={"http://localhost:8080/api/v1/download/"+Book.cover_url}
          alt="Card image cap"/>
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>


            
          </div>
      
       
    
 
      <div class="card-body">

        <h4 class="card-title">{Book.name}</h4>
      
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
          card's content.</p>
        
        <button type="button" class="btn btn-primary btn-md">Read more</button>

     
  <div class="rounded-bottom mdb-color lighten-3 text-center pt-3">
    <ul class="list-unstyled list-inline font-small">
      <li class="list-inline-item pr-2 white-text"><i class="far fa-clock pr-1"></i>05/10/2015</li>
      <li class="list-inline-item pr-2"><a href="#" class="white-text"><i
            class="far fa-comments pr-1"></i>12</a></li>
      <li class="list-inline-item pr-2"><a href="#" class="white-text"><i class="fab fa-facebook-f pr-1">
          </i>21</a></li>
      <li class="list-inline-item"><a href="#" class="white-text"><i class="fab fa-twitter pr-1"> </i>5</a></li>
    </ul>
  </div>
      </div>
      </div>
   
   </div>
   </div>
         )}
      
         
  
  
 
  
</div>
         
</div>
<br />
<br />
  

              

            </div>
                          
          
        );

        
    }
}

export default HomeComponent;

{/**<section class="">
  <!-- Footer -->
  <footer class="text-center text-white" style="background-color: #0a4275;">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: CTA -->
      <section class="">
        <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">Register for free</span>
          <button type="button" class="btn btn-outline-light btn-rounded">
            Sign up!
          </button>
        </p>
      </section>
      <!-- Section: CTA -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</section> */}