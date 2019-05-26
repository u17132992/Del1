import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Treatment } from './treatment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  url = 'http://localhost:31542/Api/Treatment';  
  constructor(private http: HttpClient) { }  
  getAllTreatment(): Observable<Treatment[]> {  
    return this.http.get<Treatment[]>(this.url + '/AllTreatments');  
  }
}