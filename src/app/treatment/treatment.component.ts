import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import {TreatmentService} from '../treatment.service'; 
import {Treatment} from '../treatment';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {
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
  onFormSubmit() 
        {this.dataSaved = false;  
        const treatment = this.treatmentForm.value;  
        this.CreateTreatment(treatment);  
        this.treatmentForm.reset();  
      } 
    loadTreatmentToEdit(treatmentId: string) {  
          this.treatmentService.getTreatmentById(treatmentId).subscribe(treatment=> {  
            this.massage = null;  
            this.dataSaved = false;  
            this.treatmentIdUpdate = treatment.TreatmentID;  
            this.treatmentForm.controls['TreatmentDesc'].setValue
      (treatment.TreatmentDesc);   
      });
    }
CreateTreatment(treatment: Treatment)
{
  if (this.treatmentIdUpdate == null) {  
          this.treatmentService.createTreatment(treatment).subscribe(  
            () => {  
              this.dataSaved = true;  
              this.massage = 'Record saved Successfully';  
              this.loadAllTreatments();  
              this.treatmentIdUpdate = null;  
              this.treatmentForm.reset();  
            }  
          );  
        } else {  
            treatment.TreatmentID= this.treatmentIdUpdate;  
          this.treatmentService.updateTreatment(treatment).subscribe(() => {  
            this.dataSaved = true;  
            this.massage = 'Record Updated Successfully';  
            this.loadAllTreatments();  
            this.treatmentIdUpdate = null;  
            this.treatmentForm.reset();  
          });  
        }  
      }  
    deleteTreatment(treatmentId: string) {  
      console.log(treatmentId);
          if (confirm("Are you sure you want to delete this ?")) {   
          this.treatmentService.deleteTreatmentById(treatmentId).subscribe(() => {  
            this.dataSaved = true;  
            this.massage = 'Record Deleted Succefully';  
            this.loadAllTreatments();  
            this.treatmentIdUpdate = null;  
            this.treatmentForm.reset();  
        
          });  
        }  
      }  
        resetForm() {  
          this.treatmentForm.reset();  
          this.massage = null;  
          this.dataSaved = false;  
        }  
      }  
