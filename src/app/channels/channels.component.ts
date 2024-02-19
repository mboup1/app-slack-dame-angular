import { Component } from '@angular/core';
import { Channel } from '../interfaces/channel';
import { ChannelsService } from '../services/channels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrl: './channels.component.css'
})
export class ChannelsComponent {
  channels: Channel[] = [];

  constructor(
    private channelsService: ChannelsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.channelsService.fetchData().then(() => {
      this.channels = this.channelsService.getChannels();

      this.channels.sort((a, b) => (b.id < a.id) ? 1 : -1);
      console.log("List channels : ", this.channels);
    });
  }

}
