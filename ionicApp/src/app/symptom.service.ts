import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Symptom } from './symptom';

@Injectable({
  providedIn: 'root'
})
export class SymptomService {
  url = 'http://localhost:31542/Api/Symptom';  
    constructor(private http: HttpClient) { }  
    getAllSymptom(): Observable<Symptom[]> {  
      return this.http.get<Symptom[]>(this.url + '/AllSymptomDetails');  
    } 


}
