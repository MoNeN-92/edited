import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { PostService } from '../post.service';



@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {


product:any

  constructor(
    private activeRouter:ActivatedRoute,
    private router:Router,
    private post:PostService
  ) { 

// this.product = this.post.product

  }

id = this.activeRouter.snapshot.params['id']

  ngOnInit(): void {
    this.post.Getpost().subscribe((response:any)=> {
     this.product = response
      
    })

  
  }
 

 
}
