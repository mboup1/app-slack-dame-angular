import { Injectable } from '@angular/core';
import axios from 'axios';
import { API_BASE_URL } from '../config/config';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // posts: Post[] = [];


  constructor() { }

  // getPostsByChannel(id: number) {

  //   axios
  //     .get(`${API_BASE_URL}/posts`)
  //     .then((response) => {
  //       this.posts = response.data;
  //       console.log('this.posts :', this.posts);

  //     })
  //     .catch((error) => {
  //       console.error('erreur:', error);
  //     });
  // }


}
