import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Boards } from './boards';
import { endpoint } from 'src/environments/environment';
import { Cards } from './cards';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  url1 = endpoint.url1 + "boards/";
  url2 = endpoint.url2 + "cards/";
commonHeader = new HttpHeaders().set('Content-Type','application/json');
  constructor(private _http:HttpClient) { }
//---------Board Service Block ---------------------------
  getAllBoards(){
    return this._http.get<Boards[]>(this.url1); 
    }

    addBoard(item: Boards){
      let body = JSON.stringify(item);
      return this._http.post(this.url1, body, {headers:this.commonHeader});
    }

    editBoard(item: Boards){
      let body = JSON.stringify(item);
      return this._http.put(this.url1 + item.id, body, {headers:this.commonHeader});
    }

    deleteBoard(id){
      return this._http.delete<Boards>(this.url1 + id, {headers:this.commonHeader});
    }
    getBoardById(id:number){
      return this._http.get<Boards>(this.url1 + id);
    }
 //------------------------Card Services --------------------------------
//  getCardById(id:number){
//    return this._http.get<Cards>(this.url2 + id);
//  }   
 addCard(item:Cards){
   let body = JSON.stringify(item);
   console.log(body);
   return this._http.post(this.url2, body, {headers:this.commonHeader});
 }
 editCard(item: Cards){
  let body = JSON.stringify(item);
  return this._http.put(this.url2 + item.id, body, {headers:this.commonHeader});
 }
 deleteCard(item: Cards){
   return this._http.delete(this.url2 + item.id, {headers:this.commonHeader});
 }
 getAllCards(){
   return this._http.get<Cards[]>(this.url2);
 }
}
