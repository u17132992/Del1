import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Treatment } from './treatment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  url = 'http://localhost:18228/Api/Treatment';  
    constructor(private http: HttpClient) { }  
    getAllTreatment(): Observable<Treatment[]> {  
      return this.http.get<Treatment[]>(this.url + '/AllTreatments');  
    }  
    getTreatmentById(  treatmentId: string): Observable<Treatment> {  
      return this.http.get<Treatment>(this.url + '/GetTreatmentsById/' + treatmentId);  
    }  
    createTreatment(treatment: Treatment): Observable<Treatment> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<Treatment>(this.url + '/InsertTreatments/',  
      treatment, httpOptions);  
    }  
    updateTreatment(treatment: Treatment): Observable<Treatment> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<Treatment>(this.url + '/UpdateTreatments/',  
      treatment, httpOptions);  
    }  
    deleteTreatmentById( treatmentId: string): Observable<Treatment> {  
    console.log(treatmentId);
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<Treatment>(this.url + '/DeleteTreatment?id=' +treatmentId,  
   httpOptions);  
    }  
  } 