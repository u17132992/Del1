import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import {Prevention} from './prevention';

@Injectable({
  providedIn: 'root'
})
export class PreventionService {
  url = 'http://localhost:31542/Api/Prevention';  
    constructor(private http: HttpClient) { }  
    getAllPrevention(): Observable<Prevention[]> {  
      return this.http.get<Prevention[]>(this.url + '/AllPreventions');  
    } 
}