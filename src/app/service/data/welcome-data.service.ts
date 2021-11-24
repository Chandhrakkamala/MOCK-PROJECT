import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// To define what kind of message response we get, we create a class

export class HelloWorldBean {
  constructor(public message:string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    // return this.http.get('http://localhost:8080/hello-world-bean')

    // To specify the type of message we receive :
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
    
    //console.log("Execute Hello World Bean Service")
  }

  executeHelloWorldBeanServiceWithParameter(name){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`)
  }
}
