import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardServiceService } from '../dashboard/dashboard-service.service';
import { Boards } from '../boards';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  // boardId:number;
  id: number=0;
  boardform:FormGroup;
  originalData:Boards;
  currentData:Boards;
 // boarddata: Boards = { id: 0, boardId: 0, boardName: '' };
  constructor(private _router: Router,
    private _data: DashboardServiceService,
    private _activateRoute: ActivatedRoute) { }


  ngOnInit() {
    // this._router.navigate(['/']);
    // this.boardId = parseInt(localStorage.getItem("key1")); 

    // this.id = this._activateRoute.snapshot.params['id'];
    // this._data.getBoardById(this.id).subscribe(
    //   (data: Boards[]) => {
    //     console.log(data);
    //     this.boarddata = data[0];
    //     console.log(this.boarddata);
    //   }
    // );

    this.boardform=new FormGroup({
      id:new FormControl(0),
      boardId:new FormControl(0),
      boardName:new FormControl(null)
    });
    this.id=this._activateRoute.snapshot.params['id'];
    this._data.getBoardById(this.id).subscribe(
      (data:Boards)=>{
        console.log(data)
        this.getAllDetails(data)
      }
    );
  }
  getAllDetails(data:Boards){
    this.originalData=data;
    this.currentData=data;
    this.boardform.patchValue({
      id:data.id,
      boardId:data.boardId,
      boardName:data.boardName
    });

  }
  // remove(item){
  //   const index = this.boardsarr.indexOf(item);
  //   if(index >= 0)
  //   {
  //     this.boardsarr.splice(index,1);
  //   }
  // }

}
