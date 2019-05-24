import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardServiceService } from '../dashboard-service.service';
import { Boards } from '../boards';
import { Cards } from '../cards';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  // boardId:number;
  arrdata: Boards[] = [];
  id: number = 0;
  cardListarr: string[] = [];
  cardsarr: Cards[] = [];
  boardform: FormGroup;
  maxId : number;
  cardDetails  :Cards;
  newcard : Cards;
  constructor(private _router: Router,
    private _data: DashboardServiceService,
    private _activateRoute: ActivatedRoute,
    private dialog : MatDialog
  ) { }


  ngOnInit() {
    // this.boardId = parseInt(localStorage.getItem("key1")); 
    this.boardform = new FormGroup({
      boardName: new FormControl(null),
      cardTitle: new FormControl(null),
      cardList:new FormArray([])
    });
    this.id = this._activateRoute.snapshot.params['id'];
    this._data.getBoardById(this.id).subscribe(
      (data: Boards) => {
        this.getAllBoardDetails(data)
      }
    );  
    this._data.getAllCards().subscribe(
      (data: Cards[]) => {
        this.cardsarr = data;
        for(let i=0;i<this.cardsarr.length;i++){

        this.boardform.value.cardTitle = this.cardsarr[i].cardTitle;
        }
         this.getAllCardDetails(this.cardsarr)
      }
    );
    //for(var i=0;i<this.card.cardList.length;i++)
    //{
      //this.cardsarr[0]=this.card.cardList[0];
     // console.log(this.card.id);
    //}
    
  }
  
  
  //----------Functions Block---------------

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cardsarr, event.previousIndex, event.currentIndex);
  }
  getAllBoardDetails(data: Boards) {
    this.boardform.patchValue({
      boardName: data.boardName
    });
  }

  getAllCardDetails(cardsarr) {
    
    for(var i=0; i<cardsarr.length; i++){
    this.cardListarr = cardsarr[i].cardList;}
    console.log(this.cardListarr);
    this.boardform.patchValue({
      //cardTitle: this.cardsarr[i].cardTitle,
     // cardList: this.cardListarr
    });
  }
  delete(id: Boards) {
    this._data.deleteBoard(id).subscribe(
      (data: any) => {
        if (data.affectedRows > 0) {
          this.arrdata.splice(this.arrdata.indexOf(id), 1);
        }
        this._router.navigateByUrl('');
      }
    );
  }
  addCard(){
    this.maxId = this.cardsarr.length+1;
    console.log(this.maxId);
  this.newcard = new Cards(
    this.maxId, 
    this.id,
    this.maxId,
    'cardTitle',
    ['cardList1','cardList2','assdd','asdasfaffd']

  );
    this._data.addCard(this.newcard).subscribe(
      (data:any)=>{

      }
    );

  }
  onclick(){
    
    for(let i = 0;i<this.cardsarr.length;i++)
    {
      this.cardDetails = this.cardsarr[i];
    for(let j = 0;j<this.cardDetails.cardList.length;j++)
      {
        console.log(this.cardDetails.cardList[j]);
      }
      console.log("outer loop");
    }
  }
}
