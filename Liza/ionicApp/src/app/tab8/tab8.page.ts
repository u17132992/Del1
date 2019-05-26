import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { EmergencycontactService } from '../emergencycontact.service'; 
import { Emergencycontact } from '../emergencycontact';

@Component({
  selector: 'app-tab8',
  templateUrl: './tab8.page.html',
  styleUrls: ['./tab8.page.scss'],
})
export class Tab8Page implements OnInit {

  dataSaved = false;  
   emergencycontactForm: any;  
  allEmergencycontacts: Observable<Emergencycontact[]>;  
  emergencycontactIdUpdate = null;  
  massage = null; 

  constructor(private formbulider: FormBuilder, private emergencycontactService:EmergencycontactService) { }

  ngOnInit() {
    this.emergencycontactForm = this.formbulider.group({  
            EmergencyName: ['', [Validators.required]],  
            EmergencyContactNumber: ['', [Validators.required]], 
            EmergencyEmail: ['', [Validators.required]],
            EmergencyAddress: ['', [Validators.required]],  
    });
    this.loadAllEmergencycontacts();
  }
  loadAllEmergencycontacts(){
    this.allEmergencycontacts = this.emergencycontactService.getAllEmergencycontact();
  }
}