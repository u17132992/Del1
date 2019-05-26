import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Malariaarea } from './malariaarea';


@Injectable({
  providedIn: 'root'
})
export class MalariaareaService {url = 'http://localhost:31542/Api/Malaria';  
  constructor(private http: HttpClient) { }  
  getAllMalariaarea(): Observable<Malariaarea[]> {  
    return this.http.get<Malariaarea[]>(this.url + '/AllMalariaAreas');  
  } 
}