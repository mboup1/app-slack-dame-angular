import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import axios from 'axios';
import { API_BASE_URL } from '../config/config';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: User[] = [];

  constructor(
    private usersService: UsersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(this.user)
  }

  getUser(id: number) {

    axios
      .get(`${API_BASE_URL}/user/${id}`)
      .then((response) => {
        this.user = response.data;
        console.log('this.user :', this.user);

      })
      .catch((error) => {
        console.error('erreur:', error);
      });
  }

}

