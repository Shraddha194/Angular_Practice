import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { Router } from '@angular/router';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Boards } from '../boards';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
boardsarr:Boards[] = [];
maxID :number;
  constructor(private _boarddata:DashboardServiceService,
   private dialog : MatDialog,
   private _router:Router) { }

  ngOnInit() {
    this._boarddata.getAllBoards().subscribe(
      (data:Boards[])=>{
        this.boardsarr=data;
        this.maxID = this.boardsarr.length;
        console.log(this.boardsarr);
      }
    )
  }
  onEditBoard(item:Boards){
    this._router.navigate(['/card',item.id]);
  }
  onAddBoardDialog(): void{
    localStorage.setItem("key1", this.maxID.toString());
     const dailogRef = this.dialog.open(DashboardDailogComponent);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boardsarr, event.previousIndex, event.currentIndex);
  }
}

@Component({
  selector: 'dashboard-dailog-component',
  templateUrl: 'dashboard-dailog.component.html'
})
export class DashboardDailogComponent{
  boardsarr:Boards[] = [];
  newId = parseInt(localStorage.getItem("key1"));
  boardObject:Boards;
  boardForm:FormGroup;
  constructor(private data:DashboardServiceService,
          private dialogref:MatDialogRef<DashboardDailogComponent>,
          private __router:Router) { }

  ngOnInit() {
    this.boardForm = new FormGroup({
      boardname : new FormControl('')
    });
  }
  onSubmit(){
    this.newId = this.newId+1;
    console.log(this.newId);
    let board = new Boards(this.newId, this.newId, this.boardForm.value.boardname);
    this.data.addBoard(board).subscribe(
      (data:Boards)=>{
        this.dialogref.close();
        this.__router.navigate(['/card',this.newId]);
      }
    )
  }
}
