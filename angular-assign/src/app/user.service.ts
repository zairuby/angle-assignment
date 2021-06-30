import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { UserList } from './user-list';
import { MessageService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  private log(messages: string){
    this.messageService.add("UserService: $(messages)")
  }

  private userURL = "https://gorest.co.in/public-api/users";

  

  getUsers(): Observable<User[]> {
    const userList = of(UserList);
    this.messageService.add("Users: Fetched results")
    return userList;
  }

  getUser(name: string): Observable<User>{
    const user = UserList.find(u => u.name === name)!;
    this.messageService.add("Users: fetched User name=${name}");
    return of(user);
  }
}
