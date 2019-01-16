import Soda from '../models/soda.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class SodaService {

  api_url = 'http://localhost:3000';
  sodaUrl = `${this.api_url}/api/sodas`;

  constructor(
    private http: HttpClient
  ) { }

  createSoda(soda: Soda): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.sodaUrl}`, soda);
  }

  getSodas(): Observable<Soda[]>{
    return this.http.get(this.sodaUrl)
    .pipe(map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as Soda[];
    }))
  }

  editSoda(soda:Soda){
    let editUrl = `${this.sodaUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, soda);
  }

  deleteSoda(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.sodaUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
  }
}