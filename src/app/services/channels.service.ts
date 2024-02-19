import axios from 'axios';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../config/config';
import { Channel } from '../interfaces/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  channels: Channel[] = [];

  constructor() {}

  async fetchData(): Promise<void> {
    try {
      const response = await axios.get(`${API_BASE_URL}/channels`);
      this.channels = response.data.map((channel: any) => ({
        id: channel.id,
        nameChannel: channel.nameChannel,
        deletable: channel.deletable,
        idUser: channel.idUser,
        posts: channel.posts,
        users: channel.users,
        
      }));
      // console.log(this.channels)
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  }

  getChannels(): Channel[] {
    return this.channels;
  }
}
