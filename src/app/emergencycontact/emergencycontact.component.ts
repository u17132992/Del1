import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { EmergencycontactService } from '../emergencycontact.service'; 
import { Emergencycontact } from '../emergencycontact';

@Component({
  selector: 'app-emergencycontactn',
  templateUrl: './emergencycontact.component.html',
  styleUrls: ['./emergencycontact.component.css']
})
export class EmergencycontactComponent implements OnInit {
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
  onFormSubmit() 
        {this.dataSaved = false;  
        const emergencycontact = this.emergencycontactForm.value;  
        this.CreateEmergencycontact(emergencycontact);  
        this.emergencycontactForm.reset();  
      } 
    loadEmergencycontactToEdit(emergencycontactId: string) {  
          this.emergencycontactService.getEmergencycontactById(emergencycontactId).subscribe(emergencycontact=> {  
            this.massage = null;  
            this.dataSaved = false;  
            this.emergencycontactIdUpdate = emergencycontact.EmergencyID;  
            this.emergencycontactForm.controls['EmergencyName'].setValue
      (emergencycontact.EmergencyName);
            this.emergencycontactForm.controls['EmergencyContactNumber'].setValue
      (emergencycontact.EmergencyContactNumber);  
            this.emergencycontactForm.controls['EmergencyEmail'].setValue
      (emergencycontact.EmergencyEmail); 
            this.emergencycontactForm.controls['EmergencyAddress'].setValue
      (emergencycontact.EmergencyAddress);
      });
    }
CreateEmergencycontact(emergencycontact: Emergencycontact)
{
  if (this.emergencycontactIdUpdate == null) {  
          this.emergencycontactService.createEmergencycontact(emergencycontact).subscribe(  
            () => {  
              this.dataSaved = true;  
              this.massage = 'Record saved Successfully';  
              this.loadAllEmergencycontacts();  
              this.emergencycontactIdUpdate = null;  
              this.emergencycontactForm.reset();  
            }  
          );  
        } else {  
            emergencycontact.EmergencyID = this.emergencycontactIdUpdate;  
          this.emergencycontactService.updateEmergencycontact(emergencycontact).subscribe(() => {  
            this.dataSaved = true;  
            this.massage = 'Record Updated Successfully';  
            this.loadAllEmergencycontacts();  
            this.emergencycontactIdUpdate = null;  
            this.emergencycontactForm.reset();  
          });  
        }  
      }  
    deleteEmergencycontact(emergencycontactId: string) {  
      console.log(emergencycontactId);
          if (confirm("Are you sure you want to delete this ?")) {   
          this.emergencycontactService.deleteEmergencycontactById(emergencycontactId).subscribe(() => {  
            this.dataSaved = true;  
            this.massage = 'Record Deleted Succefully';  
            this.loadAllEmergencycontacts();  
            this.emergencycontactIdUpdate = null;  
            this.emergencycontactForm.reset();  
        
          });  
        }  
      }  
        resetForm() {  
          this.emergencycontactForm.reset();  
          this.massage = null;  
          this.dataSaved = false;  
        }  
      }  
