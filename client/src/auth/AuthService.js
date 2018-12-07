import axios from 'axios';

 class AuthService {
    constructor() {
        const service = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
        this.service = service;
    }
    signup = (username, password, course, campus) => {
        return this.service.post('/auth/signup', { username, password, course, campus })
            .then(response => {
                return  response
            })
    }
     login = (username, password) => {
        return this.service.post('/auth/login', { username, password })
            .then(response => {
            return  response
            })
    }
    edit = (username, course, campus) => {
        return this.service.put('/auth/edit', {username, course, campus}) 
            .then(response => response)
    }
     loggedin = () => {
        return this.service.get('/auth/loggedin')
            .then(response => response)
    }
}
   
     
 export default AuthService; 