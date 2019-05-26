import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Emergencycontact } from './emergencycontact';

@Injectable({
  providedIn: 'root'
})
export class EmergencycontactService {url = 'http://localhost:31542/Api/Emergency';  
  constructor(private http: HttpClient) { }  
  getAllEmergencycontact(): Observable<Emergencycontact[]> {  
    return this.http.get<Emergencycontact[]>(this.url + '/AllEmergencyDetails');  
  } 
}