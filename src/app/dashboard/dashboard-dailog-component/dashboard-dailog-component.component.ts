import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { Boards } from 'src/app/boards';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dashboard-dailog-component',
  templateUrl: './dashboard-dailog-component.component.html',
  styleUrls: ['./dashboard-dailog-component.component.css']
})
export class DashboardDailogComponentComponent implements OnInit {
  newId = parseInt(localStorage.getItem("key1"));
  boardObject:Boards;
  boardForm:FormGroup;
  constructor(private data:DashboardServiceService,
            ) { }

  ngOnInit() {
    this.boardForm = new FormGroup({
      boardname : new FormControl('')
    });
  }
  onSubmit(){
    let board = new Boards(this.newId, this.newId, this.boardForm.value.boardname);
    console.log(board);
    this.data.addBoard(board).subscribe(
      (data:Boards)=>{
      }
    )
  }
}
