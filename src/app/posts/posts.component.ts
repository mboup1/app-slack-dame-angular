import { Component } from '@angular/core';
import { Channel } from '../interfaces/channel';
import { Post } from '../interfaces/post';
import { ActivatedRoute } from '@angular/router';
import { ChannelsService } from '../services/channels.service';
import { UsersService } from '../services/users.service';
import axios from 'axios';
import { API_BASE_URL } from '../config/config';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  channels: Channel[] = [];


  tabChannel: Channel = {
    id: 0, nameChannel: '', deletable: false, posts: [],
    idUser: 0
  }; // Initialisez channel ici
  constructor(
    private route: ActivatedRoute,
    private channelsService: ChannelsService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const channelId = +params['id'];

      this.channelsService.fetchDataChannelById(channelId).then(() => {
        this.tabChannel = this.channelsService.getChannel();
        console.log("Channel details: ", this.tabChannel);
      });
    });

    this.channels = this.channelsService.getChannels();
  }


  getChannelById(id: number) {
    this.usersService.getChannelById(id)
    // this.router.navigate(['/posts']);

  }

  onEditChannel(channelId: number) {
    // Implémentez ici la logique pour l'édition du canal
  }



  onDeleteChannel(id: number, nameChannel: string) {
    let conf = confirm(`Etes-vous sûr de vouloir supprimer ${nameChannel} ?`);

    if (conf)
      axios.delete(`${API_BASE_URL}/channel/${id}`)
        .then(() => {
          this.channels = this.channels.filter(channel => channel.id !== id);
          console.log("client supprimé avec succès!");
        })
        .catch(error => {
          console.error("Erreur lors de la suppression de la client:", error);
        });
  }




  onEditPost(channelId: number) {
    // Implémentez ici la logique pour l'édition du canal
  }

  onDeletePost(channelId: number) {
    // Implémentez ici la logique pour l'édition du canal
  }

}
