import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Frequentlyaskedquestion } from './frequentlyaskedquestion';

@Injectable({
  providedIn: 'root'
})
export class FrequentlyaskedquestionService {
  url = 'http://localhost:18228/Api/Faq';  
    constructor(private http: HttpClient) { }  
    getAllFrequentlyaskedquestion(): Observable<Frequentlyaskedquestion[]> {  
      return this.http.get<Frequentlyaskedquestion[]>(this.url + '/AllFaqDetails');  
    }  
    getFrequentlyaskedquestionById(  frequentlyaskedquestionId: string): Observable<Frequentlyaskedquestion> {  
      return this.http.get<Frequentlyaskedquestion>(this.url + '/GetFaqsById/' + frequentlyaskedquestionId);  
    }  
    createFrequentlyaskedquestion(frequentlyaskedquestion: Frequentlyaskedquestion): Observable<Frequentlyaskedquestion> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<Frequentlyaskedquestion>(this.url + '/InsertFaqDetails/',  
      frequentlyaskedquestion, httpOptions);  
    }  
    updateFrequentlyaskedquestion(frequentlyaskedquestion: Frequentlyaskedquestion): Observable<Frequentlyaskedquestion> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<Frequentlyaskedquestion>(this.url + '/UpdateFaqDetails/',  
      frequentlyaskedquestion, httpOptions);  
    }  
    deleteFrequentlyaskedquestionById( frequentlyaskedquestionId: string): Observable<Frequentlyaskedquestion> {  
    console.log(frequentlyaskedquestionId);
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<Frequentlyaskedquestion>(this.url + '/DeleteFaqDetails?id=' +frequentlyaskedquestionId,  
   httpOptions);  
    }  
  } 