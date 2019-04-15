import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { GeneralinformationService } from '../generalinformation.service'; 
import { Generalinformation } from '../generalinformation';

@Component({
  selector: 'app-generalinformation',
  templateUrl: './generalinformation.component.html',
  styleUrls: ['./generalinformation.component.css']
})
export class GeneralinformationComponent implements OnInit {
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
  onFormSubmit() 
        {this.dataSaved = false;  
        const generalinformation = this.generalinformationForm.value;  
        this.CreateGeneralinformation(generalinformation);  
        this.generalinformationForm.reset();  
      } 
    loadGeneralinformationToEdit(generalinformationId: string) {  
          this.generalinformationService.getGeneralById(generalinformationId).subscribe(generalinformation=> {  
            this.massage = null;  
            this.dataSaved = false;  
            this.generalinformationIdUpdate = generalinformation.GeneralInformationID;  
            this.generalinformationForm.controls['GeneralDesc'].setValue
      (generalinformation.GeneralDesc);   
      });
    }
CreateGeneralinformation(generalinformation: Generalinformation)
{
  if (this.generalinformationIdUpdate == null) {  
          this.generalinformationService.createGeneralinformation(generalinformation).subscribe(  
            () => {  
              this.dataSaved = true;  
              this.massage = 'Record saved Successfully';  
              this.loadAllGeneralinformations();  
              this.generalinformationIdUpdate = null;  
              this.generalinformationForm.reset();  
            }  
          );  
        } else {  
            generalinformation.GeneralInformationID = this.generalinformationIdUpdate;  
          this.generalinformationService.updateGeneralinformation(generalinformation).subscribe(() => {  
            this.dataSaved = true;  
            this.massage = 'Record Updated Successfully';  
            this.loadAllGeneralinformations();  
            this.generalinformationIdUpdate = null;  
            this.generalinformationForm.reset();  
          });  
        }  
      }  
    deleteGeneralinformation(generalinformationId: string) {  
      console.log(generalinformationId);
          if (confirm("Are you sure you want to delete this ?")) {   
          this.generalinformationService.deleteGeneralinformationById(generalinformationId).subscribe(() => {  
            this.dataSaved = true;  
            this.massage = 'Record Deleted Succefully';  
            this.loadAllGeneralinformations();  
            this.generalinformationIdUpdate = null;  
            this.generalinformationForm.reset();  
        
          });  
        }  
      }  
        resetForm() {  
          this.generalinformationForm.reset();  
          this.massage = null;  
          this.dataSaved = false;  
        }  
      }  
