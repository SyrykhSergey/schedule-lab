import axios from 'axios';

const API_URL = 'New Link/api/auth'; //Connect with Back-end

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        email: email.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  
}

export default new AuthService();