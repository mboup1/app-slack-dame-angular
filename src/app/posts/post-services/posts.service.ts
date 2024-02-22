import { Injectable } from '@angular/core';
import axios from 'axios';
import { API_BASE_URL } from '../../config/config';
import { Post } from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [];

  constructor() { }

  async fetchDataPosts(): Promise<void> {
    try {
      const response = await axios.get(`${API_BASE_URL}/posts`);
      this.posts = response.data.map((post: any) => ({
        id: post.id,
        message: post.message,
        datePost: post.datePost,
        idUser: post.idUser,
        idChannel: post.idChannel,

      }));
      // console.log(this.channels)
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  }



  getPosts(): Post[] {
    return this.posts;
  }


}
