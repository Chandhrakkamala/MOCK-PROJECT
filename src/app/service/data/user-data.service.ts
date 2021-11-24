import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class UserCreds{
  constructor(public userName:string,
              public password:string,
              public name:string) {}
}

export class isValid{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  constructor(
    private http:HttpClient
  ) { }

  displayall(userName){
    return this.http.get<UserCreds[]>(`http://localhost:8080/users/${userName}`);
  }

  verify(userName,password:string){
    return this.http.get<isValid>(`http://localhost:8080/users/${userName}/${password}`);
  }

}
