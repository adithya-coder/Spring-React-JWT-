import React, { Component } from 'react';
import UserService from  '../Service/UserService';
import axios from 'axios';
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
     
      email:'',
      password:''
      
    }
    this.changeUserNameHandler =this.changeUserNameHandler.bind(this);
    this.changePasswordHandler =this.changePasswordHandler.bind(this);
    this.User_login =this.User_login.bind(this);
  }
  componentDidMount(){
    
        UserService.getUserLogin(this.state).then((res)=>{
            let user =res.data;
            this.setState({email:user.email,
              password:user.password});
        })
    
    
}


  User_login=(e)=>{

    e.preventDefault();
    let user={email:this.state.email,password:this.state.password};
    console.log('user=>'+JSON.stringify(user));

   
      axios.post('localhost:8080/login', 
         {username: user.email, 
          password: user.password });
  
      UserService.getUserLogin(user).then(res=>{
            this.props.history.push('/login')
        });
   
   
}


  changeUserNameHandler=(event)=>{
    this.setState({email: event.target.value});
        }
   changePasswordHandler=(event)=>{
          this.setState({password: event.target.value});
              }
        
  
    render() {
        return (
            <div>
               <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"  class="img-fluid"
          alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" class="btn btn-primary btn-floating mx-1" >
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          
          <div class="form-outline mb-4">
            <input type="email" id="username" name="username"  class="form-control form-control-lg"
              placeholder="Enter a valid email address" value={this.state.email} onChange={this.changeUserNameHandler} />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          
          <div class="form-outline mb-3">
            <input type="password" id="password" name="password"class="form-control form-control-lg"
              placeholder="Enter password" value={this.state.password} onChange={this.changePasswordHandler} />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg"
              className="btn btn-primary" onClick={this.User_login}>Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
 
</section>
  
  </div>
        );
    }
}

export default LoginComponent;