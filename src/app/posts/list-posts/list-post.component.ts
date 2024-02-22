import { Component } from '@angular/core';
import { Channel } from '../../interfaces/channel';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelsService } from '../../channels/channel-services/channels.service';
import axios from 'axios';
import { API_BASE_URL } from '../../config/config';
import { UsersService } from '../../users/user-services/users.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-post',
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.css'
})
export class ListPostComponent {
  userName: string = '';
  user: User[] = [];



  tabChannel: Channel = {
    id: 0, nameChannel: '', deletable: false, posts: [],
    idUser: 0
  };
  constructor(
    private route: ActivatedRoute,
    private channelsService: ChannelsService,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      const channelId = +params['id'];

      this.channelsService.fetchDataChannelById(channelId).then(() => {
        this.tabChannel = this.channelsService.getChannel();
      });
    });
    const userId = 1;

    this.usersService.getUser(userId)
      .then(user => {
        this.user = [user];
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

  }



  getChannelById(id: number) {
    this.channelsService.getChannelById(id)

  }



  onDeleteChannel(id: number, nameChannel: string) {

    let conf = confirm(`Etes-vous sûr de vouloir supprimer ${nameChannel} ?`);

    if (conf)
      axios.delete(`${API_BASE_URL}/channel/${id}`)
        .then(() => {
          console.log("Canal supprimé avec succès!");
          this.router.navigate(['/channels/1']);

        })
        .catch(error => {
          console.error("Erreur lors de la suppression de la client:", error);
        });
  }




  onDeletePost(id: number, message: string) {
    console.log(id)
    let conf = confirm(`Etes-vous sûr de vouloir supprimer ${message} ?`);

    if (conf)
      axios.delete(`${API_BASE_URL}/post/${id}`)
        .then(() => {
          console.log("Post supprimé avec succès!");
          location.reload();
        })
        .catch(error => {
          console.error("Erreur lors de la suppression de la client:", error);
        });
  }


}
