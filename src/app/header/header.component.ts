import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import axios from 'axios';
import { API_BASE_URL } from '../config/config';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

