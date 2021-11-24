import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isValid, UserCreds, UserDataService } from '../service/data/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  users:UserCreds[];
  validMessage:string;
  
  constructor(private router: Router,
              private service:UserDataService) { }

  
  ngOnInit() {
  }

  handleLogin(){

      // console.log(this.service.executeHelloWorldBeanService());
      // this.service.executeHelloWorldBeanService().subscribe(
      //   response => this.successResponse(response)
      // );

      // console.log(this.username)

      //console.log(this.service.displayall(this.username));


      // this.service.displayall(this.username).subscribe(
      //   response => {
      //     this.users = response;
      //     console.log(response);
      //   }
      // );

      this.service.verify(this.username,this.password).subscribe(
        response => {
          this.validMessage=String(response);
          console.log(response);
        }
      );
      if(this.validMessage=="true"){
      this.router.navigate(['modal',this.username])
      }
  }

  // successResponse(response){
  //   console.log(response);
  //   console.log(response.UserCreds);
  // }

}
