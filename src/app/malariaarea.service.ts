
    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';  
    import { HttpHeaders } from '@angular/common/http';  
    import { Observable } from 'rxjs';  
    import { MalariaArea } from './malariaarea';
    
    @Injectable({
      providedIn: 'root'
    })
    export class MalariaareaService {
      url = 'http://localhost:18228/Api/Malaria';  
        constructor(private http: HttpClient) { }  
        getAllMalariaarea(): Observable<MalariaArea[]> {  
          return this.http.get<MalariaArea[]>(this.url + '/AllMalariaAreas');  
        }  
        getMalariaareaById(  malariaareaId: string): Observable<MalariaArea> {  
          return this.http.get<MalariaArea>(this.url + '/GetMalariaAreasById/' + malariaareaId);  
        }  
        createMalariaarea(malariaarea: MalariaArea): Observable<MalariaArea> {  
          const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
          return this.http.post<MalariaArea>(this.url + '/InsertMalariaAreas/',  
          malariaarea, httpOptions);  
        }  
        updateMalariaarea(malariaarea: MalariaArea): Observable<MalariaArea> {  
          const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
          return this.http.put<MalariaArea>(this.url + '/UpdateMalariaAreas/',  
         malariaarea, httpOptions);  
        }  
        deleteMalariaareaById( malariaareaId: string): Observable<MalariaArea> {  
        console.log(malariaareaId);
          const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
          return this.http.delete<MalariaArea>(this.url + '/DeleteMalariaAreas?id=' +malariaareaId,  
       httpOptions);  
        }  
      } 