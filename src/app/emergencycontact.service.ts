import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Emergencycontact } from './emergencycontact';

@Injectable({
  providedIn: 'root'
})
export class EmergencycontactService {
  url = 'http://localhost:18228/Api/Emergency';  
    constructor(private http: HttpClient) { }  
    getAllEmergencycontact(): Observable<Emergencycontact[]> {  
      return this.http.get<Emergencycontact[]>(this.url + '/AllEmergencyDetails');  
    }  
    getEmergencycontactById(  emergencycontactId: string): Observable<Emergencycontact> {  
      return this.http.get<Emergencycontact>(this.url + '/GetEmergencyDetailsById/' + emergencycontactId);  
    }  
    createEmergencycontact(emergencycontact: Emergencycontact): Observable<Emergencycontact> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<Emergencycontact>(this.url + '/InsertEmergencyDetails/',  
      emergencycontact, httpOptions);  
    }  
    updateEmergencycontact(emergencycontact: Emergencycontact): Observable<Emergencycontact> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<Emergencycontact>(this.url + '/UpdateEmergencyDetails/',  
     emergencycontact, httpOptions);  
    }  
    deleteEmergencycontactById( emergencycontactId: string): Observable<Emergencycontact> {  
    console.log(emergencycontactId);
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<Emergencycontact>(this.url + '/DeleteEmergencyDetails?id=' +emergencycontactId,  
   httpOptions);  
    }  
  } 