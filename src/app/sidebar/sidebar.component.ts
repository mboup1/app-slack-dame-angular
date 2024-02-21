import { Component } from '@angular/core';
import { Channel } from '../interfaces/channel';
import { ChannelsService } from '../services/channels.service';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  channels: Channel[] = [];

  constructor(
    private channelsService: ChannelsService,
    private usersService: UsersService,
    private postsService: PostsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.channelsService.fetchData().then(() => {
      this.channels = this.channelsService.getChannels();

      this.channels.sort((a, b) => (b.id < a.id) ? 1 : -1);
      // console.log("List channels : ", this.channels);
    });
  }

}
