import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../../config/config';
import { User } from '../../interfaces/user';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: User[] = [];


  constructor() { }



  getUser(id: number): Promise<User> {
    return axios.get(`${API_BASE_URL}/user/${id}`)
      .then(response => response.data as User)
      .catch(error => {
        console.error('Error fetching user data:', error);
        throw error; // Re-throw the error to handle it in the component
      });
  }




}
