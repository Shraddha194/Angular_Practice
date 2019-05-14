import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from './dashboard-service.service';
import { Router } from '@angular/router';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Boards } from '../boards';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';

import { DashboardDailogComponentComponent } from './dashboard-dailog-component/dashboard-dailog-component.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
boardsarr:Boards[] = [];
maxID :number;
dialogref :MatDialogRef<DashboardDailogComponentComponent>
  constructor(private _boarddata:DashboardServiceService,
    private _router:Router,private dialog : MatDialog) { }

  ngOnInit() {
    this._boarddata.getAllBoards().subscribe(
      (data:any[])=>{
        this.boardsarr=data;
        this.maxID = this.boardsarr.length;
        console.log(this.boardsarr);
      }
    )
  }
  
  onAddBoardDialog(): void{
    this.maxID= this.maxID+1;
    localStorage.setItem("key1", this.maxID.toString());
    console.log(localStorage.getItem("key1")); 
    this.dialogref = this.dialog.open(DashboardDailogComponentComponent);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boardsarr, event.previousIndex, event.currentIndex);
  }
  
  
}
