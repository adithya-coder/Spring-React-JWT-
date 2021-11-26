import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import  HeaderComponeet from  './Components/HeaderComponeet';
import  FooterComponent from  './Components/FooterComponent';
import HomeComponent  from './Components/HomeComponent';
import LoginComponent from './Components/LoginComponent';
import Log from './Components/log';
import Login from "./Components/logincomponents";
import AuthService from "./Service/AuthService";
import AddBookComponent from "./Components/AddBookComponent";
import SuccssComponent from './Components/SuccssComponent';


function App() {
  return (
   <div>
     <HeaderComponeet/>
     <br/>
      <div>
    
    <Router>
     
    
         <div className="container">
           <Switch> 
                <Route path="/" exact component={HomeComponent}></Route>
                <Route path="/login" component={Login}></Route>
                 <Route path="/add-book/:isbn" component={AddBookComponent}></Route>
                 <Route path="/succss" component={SuccssComponent}></Route>
               {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>*/}
            </Switch>
         
      </div>
    
   
        </Router>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<FooterComponent/>
     </div>
  );
}

export default App;
