import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  boardId:number;
  constructor(private _router:Router) { }


  ngOnInit() {
    this._router.navigate(['/']);
    this.boardId = parseInt(localStorage.getItem("key1"));
    console.log(this.boardId);
  }
  // remove(item){
  //   const index = this.boardsarr.indexOf(item);
  //   if(index >= 0)
  //   {
  //     this.boardsarr.splice(index,1);
  //   }
  // }
  
}
