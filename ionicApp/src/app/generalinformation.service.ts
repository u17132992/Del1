import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Generalinformation } from './generalinformation';

@Injectable({
  providedIn: 'root'
})
export class GeneralinformationService {
  url = 'http://localhost:31542/Api/General';  
    constructor(private http: HttpClient) { }  
    getAllGeneralinformation(): Observable<Generalinformation[]> {  
      return this.http.get<Generalinformation[]>(this.url + '/AllGeneralDetails');  
    }  
}