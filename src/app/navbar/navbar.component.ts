import { Component, Input, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
 
  }

     mines(param: any) {
    this.mines(param)
  }



  hideShow = 'none';
  togle() {
    this.hideShow = this.hideShow == 'none' ? 'block' : 'none'
  }

  hideShoww = 'd-none';
  toglee() {
    this.hideShoww = this.hideShoww == 'd-none' ? 'd-block' : 'd-none'
  };


  username = new FormControl('', [Validators.required,])
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.minLength(8),])
  textarea = new FormControl('', [Validators.maxLength(100),])






  send() {
  


  }
}