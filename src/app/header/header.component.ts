import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { UsersService } from '../users/user-services/users.service';
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
    const userId = 1;

    this.usersService.getUser(userId)
      .then(user => {
        this.user = [user];
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }

}

