import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from './dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
boardsarr:any = [];
  constructor(private _boarddata:DashboardServiceService) { }

  ngOnInit() {
    this._boarddata.getAllBoards().subscribe(
      (data:any[])=>{
        this.boardsarr=data;
      }
    )
  }

}
