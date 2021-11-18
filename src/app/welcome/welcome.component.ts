import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message : string = 'My name is Chandhrakkamala'// will work without the type
  constructor() { }

  ngOnInit() {
    console.log(this.message);
  }

}
