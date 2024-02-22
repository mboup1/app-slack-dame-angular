import { Component } from '@angular/core';
import { Channel } from '../interfaces/channel';
import { ChannelsService } from '../channels/channel-services/channels.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  channels: Channel[] = [];

  constructor(
    private channelsService: ChannelsService,
  ) { }

  ngOnInit(): void {
    this.channelsService.fetchData().subscribe(() => {
      this.channels = this.channelsService.getChannels();
    });
  }

}
