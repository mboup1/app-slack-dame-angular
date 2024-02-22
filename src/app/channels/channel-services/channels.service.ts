import axios from 'axios';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../../config/config';
import { Channel } from '../../interfaces/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  channels: Channel[] = [];
  channelById: Channel[] = [];

  channel: Channel = {
    id: 0, nameChannel: '', deletable: false, posts: [],
    idUser: 0
  };


  constructor() { }

  async fetchData(): Promise<void> {
    try {
      const response = await axios.get(`${API_BASE_URL}/channels`);
      this.channels = response.data.map((channel: any) => ({
        id: channel.id,
        nameChannel: channel.nameChannel,
        deletable: channel.deletable,
        idUser: channel.idUser,
        posts: channel.posts,
        user: channel.user,

      }));
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  }

  async fetchDataChannelById(id: number): Promise<void> {
    try {
      const response = await axios.get(`${API_BASE_URL}/channel/${id}`);
      this.channel = response.data
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  }

  getChannelById(id: number): void {
    axios
      .get(`${API_BASE_URL}/channel/${id}`)
      .then((response) => {
        this.channelById = response.data;
        console.log('this.channel :', this.channelById);
      })
      .catch((error) => {
        console.error('erreur:', error);
      });
  }

  getChannels(): Channel[] {
    return this.channels;
  }

  getChannel(): Channel {
    return this.channel;
  }
}
