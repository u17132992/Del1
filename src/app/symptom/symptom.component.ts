import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import {SymptomService} from '../symptom.service'; 
import {Symptom} from '../symptom';

@Component({
  selector: 'app-symptom',
  templateUrl: './symptom.component.html',
  styleUrls: ['./symptom.component.css']
})
export class SymptomComponent implements OnInit {
  dataSaved = false;  
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
  onFormSubmit() 
        {this.dataSaved = false;  
        const symptom = this.symptomForm.value;  
        this.CreateSymptom(symptom);  
        this.symptomForm.reset();  
      } 
    loadSymptomToEdit(symptomId: string) {  
          this.symptomService.getSymptomById(symptomId).subscribe(symptom=> {  
            this.massage = null;  
            this.dataSaved = false;  
            this.symptomIdUpdate = symptom.SymptomID;  
            this.symptomForm.controls['SymptomDesc'].setValue
      (symptom.SymptomDesc);   
      });
    }
CreateSymptom(symptom: Symptom)
{
  if (this.symptomIdUpdate == null) {  
          this.symptomService.createSymptom(symptom).subscribe(  
            () => {  
              this.dataSaved = true;  
              this.massage = 'Record saved Successfully';  
              this.loadAllSymptoms();  
              this.symptomIdUpdate = null;  
              this.symptomForm.reset();  
            }  
          );  
        } else {  
            symptom.SymptomID= this.symptomIdUpdate;  
          this.symptomService.updateSymptom(symptom).subscribe(() => {  
            this.dataSaved = true;  
            this.massage = 'Record Updated Successfully';  
            this.loadAllSymptoms();  
            this.symptomIdUpdate = null;  
            this.symptomForm.reset();  
          });  
        }  
      }  
    deleteSymptom(symptomId: string) {  
      console.log(symptomId);
          if (confirm("Are you sure you want to delete this ?")) {   
          this.symptomService.deleteSymptomById(symptomId).subscribe(() => {  
            this.dataSaved = true;  
            this.massage = 'Record Deleted Succefully';  
            this.loadAllSymptoms();  
            this.symptomIdUpdate = null;  
            this.symptomForm.reset();  
        
          });  
        }  
      }  
        resetForm() {  
          this.symptomForm.reset();  
          this.massage = null;  
          this.dataSaved = false;  
        }  
      }  
