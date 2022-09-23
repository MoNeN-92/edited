import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {
  }
prod:any = [
  {
  title : 'iphone',
  price : 3000,
  kg : [0.800],
  sale : null,
  gift : true,
  avatar :[
'assets/iphone.png',
'assets/iphone2.png',
'assets/iphone1.png',
'assets/iphone3.png',
  ],
  poster:2,
  disc:50,
},
{
  title : 'samsung',
  price : 2000,
  kg : [1.760],
  sale : null,
  gift : true,
  avatar :[
'assets/samsung.jfif',
'assets/galaxy.png',
'assets/samsung1.jpg',

  ],
  poster:1,
  disc:40,
},
{
  title : 'pixel',
  price : 1000,
  kg : [1.700],
  sale : '',
  gift : false,
  avatar :[
'assets/pixel.png',
'assets/gpix.png',
'assets/pix.jfif',
  ],
  poster:1,
  disc:30,
},

];

changePoster(arrayind:any, imageind:any){
  this.prod[arrayind].poster = imageind
}

DisPrice(price:any, disc:any){
  return (price / 100) * disc;
}


}

