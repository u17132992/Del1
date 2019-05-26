import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import {SymptomService} from '../symptom.service'; 
import {Symptom} from '../symptom';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {dataSaved = false;  
   symptomForm: any;  
  allSymptoms: Observable<Symptom[]>;  
  symptomIdUpdate = null;  
  massage = null; 

  constructor(private formbulider: FormBuilder, private symptomService:SymptomService) { }

  ngOnInit() {
    this.symptomForm = this.formbulider.group({  
            SymptomDesc: ['', [Validators.required]],  
    });
    this.loadAllSymptoms();
  }
  loadAllSymptoms(){
    this.allSymptoms = this.symptomService.getAllSymptom();
  }
}
