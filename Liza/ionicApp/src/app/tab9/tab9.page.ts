import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { MalariaareaService } from '../malariaarea.service'; 
import { Malariaarea } from '../malariaarea';

@Component({
  selector: 'app-tab9',
  templateUrl: './tab9.page.html',
  styleUrls: ['./tab9.page.scss'],
})
export class Tab9Page implements OnInit {dataSaved = false;  
   malariaareaForm: any;  
  allMalariaareas: Observable<Malariaarea[]>;  
  malariaareaIdUpdate = null;  
  massage = null; 

  constructor(private formbulider: FormBuilder, private malariaareaService:MalariaareaService) { }

  ngOnInit() {
    this.malariaareaForm = this.formbulider.group({  
            
       
            Country: ['', [Validators.required]],
           
    });
    this.loadAllMalariaareas();
  }
  loadAllMalariaareas(){
    this.allMalariaareas = this.malariaareaService.getAllMalariaarea();
  }
}
