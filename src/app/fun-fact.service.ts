import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import {FunFact} from './fun-fact';

@Injectable({
  providedIn: 'root'
})
export class FunFactService {
  url = 'http://localhost:18228/Api/FunFact';  
    constructor(private http: HttpClient) { }  
    getAllFunFact(): Observable<FunFact[]> {  
      return this.http.get<FunFact[]>(this.url + '/AllFunFacts');  
    }  
    getFunFactById(  funFactId: string): Observable<FunFact> {  
      return this.http.get<FunFact>(this.url + '/GetFunFactsById/' + funFactId);  
    }  
    createFunFact(funFact: FunFact): Observable<FunFact> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<FunFact>(this.url + '/InsertFunFacts/',  
      funFact, httpOptions);  
    }  
    updateFunFact(funFact: FunFact): Observable<FunFact> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<FunFact>(this.url + '/UpdateFunFacts/',  
      funFact, httpOptions);  
    }  
    deleteFunFactById( funFactId: string): Observable<FunFact> {  
    console.log(funFactId);
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<FunFact>(this.url + '/DeleteFunFacts?id=' +funFactId,  
   httpOptions);  
    }  
  } 
