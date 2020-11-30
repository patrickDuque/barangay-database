import axios from 'axios';

const instance = axios.create({
  baseURL : 'https://barangay-backend.herokuapp.com/'
  // baseURL : 'http://localhost:5000'
});

instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export default instance;
