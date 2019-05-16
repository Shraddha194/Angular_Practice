import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Boards } from '../boards';
import { endpoint } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  url = endpoint.url + "boards/";
commonHeader = new HttpHeaders().set('Content-Type','application/json');
  constructor(private _http:HttpClient) { }

  getAllBoards(){
    return this._http.get<Boards[]>(this.url); 
    }

    addBoard(item: Boards){
      let body = JSON.stringify(item);
      return this._http.post(this.url, body, {headers:this.commonHeader});
    }

    editBoard(item: Boards){
      let body = JSON.stringify(item);
      return this._http.put(this.url + item.id, body, {headers:this.commonHeader});
    }

    deleteBoard(item:Boards){
      return this._http.delete(this.url + item.id, {headers:this.commonHeader});
    }
    getBoardById(id:number){
      return this._http.get<Boards>(this.url + id);
    }
}
