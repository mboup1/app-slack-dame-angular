import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import axios from 'axios';
import { API_BASE_URL } from '../config/config';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent {
  postForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initPostForm();

    this.route.queryParams.subscribe(params => {
      this.postForm.patchValue({
        // index: params['index'],
        id: params['id'],
        idChannel: params['idChannel'],
        message: params['message'],


      });
      console.log("this.postForm", this.postForm.value);

    });
  }


  initPostForm(): void {
    this.postForm = this.formBuilder.group({
      id: null,
      message: ['', Validators.required],
      datePoste: [''],
      idChannel: ['', Validators.required],

    });
  }



  updatePost(id: number, updatedPost: any, idChannel:number): void {
    console.log("id :", id);
    console.log("idChannel :", idChannel);

    axios.put(`${API_BASE_URL}/post/${id}`, updatedPost)
      .then(response => {
        console.log("Post updated successfully:", response);
        this.router.navigate([`/channels/${idChannel}`]);
      })
      .catch(error => {
        console.error("Update failed:", error);
      });
  }

}
