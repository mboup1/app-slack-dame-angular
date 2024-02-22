import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../interfaces/post';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { API_BASE_URL } from '../../config/config';
import { ChannelsService } from '../../channels/channel-services/channels.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;
  posts: Post[] = [];
  idChannel!: number;
  channelName: string = '';



  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private channelsService: ChannelsService

  ) { }

  ngOnInit(): void {
    this.initPostForm();
    // Extraction de l'idChannel de l'URL
    this.route.params.subscribe(params => {
      this.idChannel = +params['id'];
      this.postForm.get('idChannel')?.setValue(this.idChannel);

      // console.log("idChannel", this.idChannel);

      this.getChannelName();


    });
  }

  initPostForm(): void {
    this.postForm = this.formBuilder.group({

      message: ['', Validators.required],
      idChannel: ['', Validators.required],
    });
  }


  getChannelName(): void {
    this.channelsService.fetchDataChannelById(this.idChannel)
      .then(() => {
        this.channelName = this.channelsService.getChannel().nameChannel;
        // console.log("this.channelName : ", this.channelName)
      })
      .catch(error => {
        console.error('Error fetching channel data:', error);
      });
  }


  createPost(post: any) {
    console.log("createPost : ", post)
    axios.post(`${API_BASE_URL}/post`, post)
      .then(response => {
        console.log("Post créé avec succès:", response);
        this.router.navigate(['/channels', this.idChannel]).then(() => {
          // After navigation, reset the form
          this.initPostForm();
        });
      })
      .catch(error => {
        console.error("La création a échoué:", error);
      });
  }




}
