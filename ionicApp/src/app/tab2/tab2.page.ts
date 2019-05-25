import { Component, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { GeneralinformationService } from '../generalinformation.service'; 
import { Generalinformation } from '../generalinformation';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  dataSaved = false;  
   generalinformationForm: any;  
  allGeneralinformations: Observable<Generalinformation[]>;  
  generalinformationIdUpdate = null;  
  massage = null; 

  constructor(private formbulider: FormBuilder, private generalinformationService:GeneralinformationService) { }

  ngOnInit() {
    this.generalinformationForm = this.formbulider.group({  
            GeneralDesc: ['', [Validators.required]],  
    });
    this.loadAllGeneralinformations();
  }
  loadAllGeneralinformations(){
    this.allGeneralinformations = this.generalinformationService.getAllGeneralinformation();
  }



}
