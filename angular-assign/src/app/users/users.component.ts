import { Component, OnInit } from '@angular/core';
import { MessageService } from '../messages.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  selectedUser?: User;
  
  userList:User[] = [];

  constructor(private userService: UserService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void{
    this.userService.getUsers()
      .subscribe(userList => this.userList = userList);
  }

}
