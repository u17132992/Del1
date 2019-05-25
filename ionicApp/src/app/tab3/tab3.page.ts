import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import {PreventionService} from '../prevention.service'; 
import {Prevention} from '../prevention';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {dataSaved = false;  
   preventionForm: any;  
  allPreventions: Observable<Prevention[]>;  
  preventionIdUpdate = null;  
  massage = null; 

  constructor(private formbulider: FormBuilder, private preventionService:PreventionService) { }

  ngOnInit() {
    this.preventionForm = this.formbulider.group({  
            PreventionDesc: ['', [Validators.required]],  
    });
    this.loadAllPreventions();
  }
  loadAllPreventions(){
    this.allPreventions = this.preventionService.getAllPrevention();
  }
}
