import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
url:'http://localhost:3100/boards/';
  constructor(private _http:HttpClient) { }

  getAllBoards(){
    return this._http.get(this.url);
    }

}
