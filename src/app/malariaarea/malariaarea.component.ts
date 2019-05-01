import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { MalariaareaService } from '../malariaarea.service'; 
import { MalariaArea } from '../malariaarea';

@Component({
  selector: 'app-malariaarean',
  templateUrl: './malariaarea.component.html',
  styleUrls: ['./malariaarea.component.css']
})
export class MalariaAreaComponent implements OnInit {
  dataSaved = false;  
   malariaareaForm: any;  
  allMalariaareas: Observable<MalariaArea[]>;  
  malariaareaIdUpdate = null;  
  massage = null; 

  constructor(private formbulider: FormBuilder, private malariaareaService:MalariaareaService) { }

  ngOnInit() {
    this.malariaareaForm = this.formbulider.group({  
            City: ['', [Validators.required]],  
            Province: ['', [Validators.required]], 
            Country: ['', [Validators.required]],
           
    });
    this.loadAllMalariaareas();
  }
  loadAllMalariaareas(){
    this.allMalariaareas = this.malariaareaService.getAllMalariaarea();
  }
  onFormSubmit() 
        {this.dataSaved = false;  
        const malariaarea = this.malariaareaForm.value;  
        this.CreateMalariaarea(malariaarea);  
        this.malariaareaForm.reset();  
      } 
    loadMalariaareaToEdit(malariaareaId: string) {  
          this.malariaareaService.getMalariaareaById(malariaareaId).subscribe(malariaarea=> {  
            this.massage = null;  
            this.dataSaved = false;  
            this.malariaareaIdUpdate = malariaarea.AreaID;  
            this.malariaareaForm.controls['City'].setValue
      (malariaarea.City);
            this.malariaareaForm.controls['Province'].setValue
      (malariaarea.Province);  
            this.malariaareaForm.controls['Country'].setValue
      (malariaarea.Country);
      });
    }
CreateMalariaarea(malariaarea: MalariaArea)
{
  if (this.malariaareaIdUpdate == null) {  
          this.malariaareaService.createMalariaarea(malariaarea).subscribe(  
            () => {  
              this.dataSaved = true;  
              this.massage = 'Record saved Successfully';  
              this.loadAllMalariaareas();  
              this.malariaareaIdUpdate = null;  
              this.malariaareaForm.reset();  
            }  
          );  
        } else {  
            malariaarea.AreaID = this.malariaareaIdUpdate;  
          this.malariaareaService.updateMalariaarea(malariaarea).subscribe(() => {  
            this.dataSaved = true;  
            this.massage = 'Record Updated Successfully';  
            this.loadAllMalariaareas();  
            this.malariaareaIdUpdate = null;  
            this.malariaareaForm.reset();  
          });  
        }  
      }  
    deleteMalariaarea(malariaareaId: string) {  
      console.log(malariaareaId);
          if (confirm("Are you sure you want to delete this ?")) {   
          this.malariaareaService.deleteMalariaareaById(malariaareaId).subscribe(() => {  
            this.dataSaved = true;  
            this.massage = 'Record Deleted Succefully';  
            this.loadAllMalariaareas();  
            this.malariaareaIdUpdate = null;  
            this.malariaareaForm.reset();  
        
          });  
        }  
      }  
        resetForm() {  
          this.malariaareaForm.reset();  
          this.massage = null;  
          this.dataSaved = false;  
        }  
      }  
