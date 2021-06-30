import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userList: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.userService.getUsers()
      .subscribe(userList => this.userList = userList.slice(1,10))
  }
}
