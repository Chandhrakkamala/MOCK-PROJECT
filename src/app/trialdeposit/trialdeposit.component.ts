import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trialdeposit',
  templateUrl: './trialdeposit.component.html',
  styleUrls: ['./trialdeposit.component.css']
})
export class TrialdepositComponent implements OnInit {
  closeResult="";
  microDeposit1=0.0;
  microDeposit2=0.0;
  message:string;
  loop=0;
  isNavigate='false';

  constructor(private modalService:NgbModal,private router: Router) { }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-body'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  navigate(){
    this.router.navigate(['welcome'])
  }

  verify(){
    this.loop= this.loop+1;
    if((this.microDeposit1 == 0.1) && (this.microDeposit2==0.2))
    {
      this.message = "Payment Source Verified. You will be taken to the logout Screen.";
      this.isNavigate='true';
      this.navigate();
    }
    else{
      this.message = "Payment Source Cannot be Verified"
    }
    if(this.loop==3){
      this.isNavigate = 'true';
      this.message = "Limit exceeded! You will be taken to the logout Screen."
      this.navigate();
    }
    console.log(this.loop)
  }

}
