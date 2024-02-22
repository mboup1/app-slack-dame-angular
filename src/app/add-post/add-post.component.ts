import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../interfaces/post';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { API_BASE_URL } from '../config/config';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;
  posts: Post[] = [];
  idChannel!: number;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute  // Injecter ActivatedRoute ici

  ) { }

  ngOnInit(): void {
    this.initPostForm();
    // Extraction de l'idChannel de l'URL
    this.route.params.subscribe(params => {
      this.idChannel = +params['id'];
      this.postForm.get('idChannel')?.setValue(this.idChannel);

      console.log("idChannel", this.idChannel)
    });
  }

  initPostForm(): void {
    this.postForm = this.formBuilder.group({

      message: ['', Validators.required],
      idChannel: ['', Validators.required],
    });
  }

  createPost(post: any) {
    console.log("createPost : ",post)
    axios.post(`${API_BASE_URL}/post`, post)
      .then(response => {
        console.log("Post créé avec succès:", response);
        this.router.navigate(['/channels', this.idChannel]);
      })
      .catch(error => {
        console.error("La création a échoué:", error);
      });
  }


}
