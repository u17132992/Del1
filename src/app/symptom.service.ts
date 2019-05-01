import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Symptom } from './symptom';

@Injectable({
  providedIn: 'root'
})
export class SymptomService {
  url = 'http://localhost:18228/Api/Symptom';  
    constructor(private http: HttpClient) { }  
    getAllSymptom(): Observable<Symptom[]> {  
      return this.http.get<Symptom[]>(this.url + '/AllSymptomDetails');  
    }  
    getSymptomById(  symptomId: string): Observable<Symptom> {  
      return this.http.get<Symptom>(this.url + '/GetSymptomDetailsById/' + symptomId);  
    }  
    createSymptom(symptom: Symptom): Observable<Symptom> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<Symptom>(this.url + '/InsertSymptomDetails/',  
      symptom, httpOptions);  
    }  
    updateSymptom(symptom: Symptom): Observable<Symptom> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<Symptom>(this.url + '/UpdateSymptomDetails/',  
      symptom, httpOptions);  
    }  
    deleteSymptomById( symptomId: string): Observable<Symptom> {  
    console.log(symptomId);
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<Symptom>(this.url + '/DeleteSymptomDetails?id=' +symptomId,  
   httpOptions);  
    }  
  } 