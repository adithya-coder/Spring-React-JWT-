import React, { Component } from 'react';

class SuccssComponent extends Component {
    render() {
        return (
            <div>
                <div class="container">
   <div class="row">
      <div class="col-md-6 mx-auto mt-5">
         <div class="payment">
            <div class="payment_header">
               <div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>
            </div>
            <div class="content">
               <h1>Add Success !</h1>
               <p>You Book is Added, Thank You!</p>
               <a href="/add-book/add">Go to Home</a>
            </div>
            
         </div>
      </div>
   </div>
</div>
            </div>
        );
    }
}

export default SuccssComponent;