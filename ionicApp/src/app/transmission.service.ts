import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import {Transmission} from './transmission';

@Injectable({
  providedIn: 'root'
})
export class TransmissionService {
  url = 'http://localhost:31542/Api/Transmission';  
    constructor(private http: HttpClient) { }  
    getAllTransmission(): Observable<Transmission[]> {  
      return this.http.get<Transmission[]>(this.url + '/AllTransmissions');  
    }

}
