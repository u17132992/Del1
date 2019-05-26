import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import {FunFact} from './fun-fact';

@Injectable({
  providedIn: 'root'
})
export class FunFactService { url = 'http://localhost:31542/Api/FunFact';  
  constructor(private http: HttpClient) { }  
  getAllFunFact(): Observable<FunFact[]> {  
    return this.http.get<FunFact[]>(this.url + '/AllFunFacts');  
  }
}
