import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

@Injectable()
export class UserService {

private _users : BehaviorSubject<User[]>;

  private dataSource: { 
    users: User[]
  }

  constructor(private httpClient: HttpClient) { 
    this.dataSource = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> { 
    return this._users.asObservable();
  }

userById(id: number){
return this.dataSource.users.find(user => user.id == id);
}

loadAll(){ 
  const userURL = 'https://angular-material-api.azurewebsites.net/users';

  return this.httpClient.get<User[]>(userURL)
  .subscribe( data=> {
    this.dataSource.users = data;
    this._users.next(Object.assign({},this.dataSource).users);
  }, onerror => {
    console.log("User fetch failed!");
  }) 
}
}
