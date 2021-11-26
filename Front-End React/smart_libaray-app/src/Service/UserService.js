import axios from 'axios';
const EMPLOYEE_API_BASE_URL="http://localhost:8080/";

class UserService{

getUserLogin(user){
    return axios.post(EMPLOYEE_API_BASE_URL+'login',user);
  
}


 userLogin=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/login`,
        'data':authRequest
    })
}


}

export default new UserService()