import { Component } from '@angular/core';
import { HomeService } from '../servies/home-service';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  constructor(public state:HomeService)
  {

  }
}
