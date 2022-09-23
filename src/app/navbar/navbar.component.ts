import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hideShow = 'none';
  togle(){
    this.hideShow = this.hideShow == 'none' ? 'block' : 'none'}
}
