import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChannelsService } from '../services/channels.service';
import { Channel } from '../interfaces/channel';
import { API_BASE_URL } from '../config/config';
import axios from 'axios';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrl: './add-channel.component.css'
})
export class AddChannelComponent {
  channelForm!: FormGroup;
  channels: Channel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private channelService: ChannelsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initChannelForm();
    this.channels = this.channelService.getChannels();
  }

  initChannelForm(): void {
    this.channelForm = this.formBuilder.group({
      // index: [0],

      nameChannel: ['', Validators.required],
    });
  }

  createChannel(channel: any) {
    console.log(channel)
    axios.post(`${API_BASE_URL}/channel`, channel)
      .then(response => {
        console.log("canal créé avec succès:", response);
        this.router.navigate(['/channels']);
      })
      .catch(error => {
        console.error("La création a échoué:", error);
      });
  }

}
