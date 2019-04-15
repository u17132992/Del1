import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Generalinformation } from './generalinformation';

@Injectable({
  providedIn: 'root'
})
export class GeneralinformationService {
  url = 'http://localhost:18228/Api/General';  
    constructor(private http: HttpClient) { }  
    getAllGeneralinformation(): Observable<Generalinformation[]> {  
      return this.http.get<Generalinformation[]>(this.url + '/AllGeneralDetails');  
    }  
    getGeneralById(  generalinformationId: string): Observable<Generalinformation> {  
      return this.http.get<Generalinformation>(this.url + '/GetGeneralDetailsById/' + generalinformationId);  
    }  
    createGeneralinformation(generalinformation: Generalinformation): Observable<Generalinformation> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<Generalinformation>(this.url + '/InsertGeneralDetails/',  
      generalinformation, httpOptions);  
    }  
    updateGeneralinformation(generalinformation: Generalinformation): Observable<Generalinformation> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<Generalinformation>(this.url + '/UpdateGeneralDetails/',  
      generalinformation, httpOptions);  
    }  
    deleteGeneralinformationById( generalinformationId: string): Observable<Generalinformation> {  
    console.log(generalinformationId);
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<Generalinformation>(this.url + '/DeleteGeneralDetails?id=' +generalinformationId,  
   httpOptions);  
    }  
  } 