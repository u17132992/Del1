import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import {TreatmentService} from '../treatment.service'; 
import {Treatment} from '../treatment';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {
  dataSaved = false;  
   treatmentForm: any;  
  allTreatments: Observable<Treatment[]>;  
  treatmentIdUpdate = null;  
  massage = null; 

  constructor(private formbulider: FormBuilder, private treatmentService:TreatmentService) { }

  ngOnInit() {
    this.treatmentForm = this.formbulider.group({  
            TreatmentDesc: ['', [Validators.required]],  
    });
    this.loadAllTreatments();
  }
  loadAllTreatments(){
    this.allTreatments = this.treatmentService.getAllTreatment();
  }
}