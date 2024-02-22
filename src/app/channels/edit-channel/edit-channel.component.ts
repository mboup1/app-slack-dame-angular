import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { API_BASE_URL } from '../../config/config';

@Component({
  selector: 'app-edit-channel',
  templateUrl: './edit-channel.component.html',
  styleUrls: ['./edit-channel.component.css']
})
export class EditChannelComponent implements OnInit {
  channelForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initChannelForm();

    this.route.queryParams.subscribe(params => {
      this.channelForm.patchValue({
        id: params['id'],
        nameChannel: params['nameChannel'],
      });
    });
  }


  initChannelForm(): void {
    this.channelForm = this.formBuilder.group({
      id: null,
      nameChannel: ['', Validators.required],
    });
  }



  updateChannel(id: number, updatedChannel: any): void {

    axios.put(`${API_BASE_URL}/channel/${id}`, updatedChannel)
      .then(response => {
        console.log("Canal mis à jour avec succès:", response);
        this.router.navigate([`/channels/${id}`]);
      })
      .catch(error => {
        console.error("La mise à jour a échoué:", error);
      });
  }
}
