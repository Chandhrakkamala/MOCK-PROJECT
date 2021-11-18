import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalpop',
  templateUrl: './modalpop.component.html',
  styleUrls: ['./modalpop.component.css']
})
export class ModalpopComponent implements OnInit{
  closeResult = '';
  routingNumber = '';
  
  constructor(private modalService:NgbModal,private router: Router) { }

  ngOnInit(){
    
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-body'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  navigate(){
    this.router.navigate(['trialmodal'])
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

}
