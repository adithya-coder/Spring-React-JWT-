import axios from 'axios';

const API_URL = "http://localhost:8080/";

class AuthService {
  login(username, password) {
    
    return axios
      .post(API_URL+"login", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("User", JSON.stringify(response.data));
        }

        return response.data;
      });
    }
  

  logout() {
    localStorage.removeItem("User");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('User'));;
  }
}

export default new AuthService();
