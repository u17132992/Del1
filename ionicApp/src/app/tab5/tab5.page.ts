import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import {TransmissionService} from '../transmission.service'; 
import {Transmission} from '../transmission';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  dataSaved = false;  
   transmissionForm: any;  
  allTransmissions: Observable<Transmission[]>;  
  transmissionIdUpdate = null;  
  massage = null; 

  constructor(private formbulider: FormBuilder, private transmissionService:TransmissionService) { }

  ngOnInit() {
    this.transmissionForm = this.formbulider.group({  
            TransmissionDesc: ['', [Validators.required]],  
    });
    this.loadAllTransmissions();
  }
  loadAllTransmissions(){
    this.allTransmissions = this.transmissionService.getAllTransmission();
  }
}