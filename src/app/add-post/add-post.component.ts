import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../interfaces/post';
import { Router } from '@angular/router';
import axios from 'axios';
import { API_BASE_URL } from '../config/config';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  postForm!: FormGroup;
  posts: Post[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initPostForm();
  }

  initPostForm(): void {
    this.postForm = this.formBuilder.group({

      message: ['', Validators.required],
      idChannel: ['', Validators.required],
    });
  }

  createPost(post: any) {
    console.log(post)
    axios.post(`${API_BASE_URL}/post`, post)
      .then(response => {
        console.log("Post créé avec succès:", response);
        this.router.navigate(['/channels']);
      })
      .catch(error => {
        console.error("La création a échoué:", error);
      });
  }


}
