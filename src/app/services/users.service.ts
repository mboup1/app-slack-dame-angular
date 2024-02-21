import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../config/config';
import { User } from '../interfaces/user';
import axios from 'axios';
import { Post as Channel } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: User[] = [];
  channel: Channel[] = [];



  constructor() { }



  getUser(id: number) {

    axios
      .get(`${API_BASE_URL}/user/${id}`)
      .then((response) => {
        this.user = response.data;
        console.log('this.user :', this.user);

      })
      .catch((error) => {
        console.error('erreur:', error);
      });
  }

  getChannelById(id: number): void {
    axios
      .get(`${API_BASE_URL}/channel/${id}`)
      .then((response) => {
        this.channel = response.data;
        console.log('this.channel :', this.channel);
      })
      .catch((error) => {
        console.error('erreur:', error);
      });
  }


}
