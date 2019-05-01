import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import {FunFactService} from '../fun-fact.service'; 
import {FunFact} from '../fun-fact';

@Component({
  selector: 'app-fun-fact',
  templateUrl: './fun-fact.component.html',
  styleUrls: ['./fun-fact.component.css']
})
export class FunFactComponent implements OnInit {
  dataSaved = false;  
   funFactForm: any;  
  allFunFacts: Observable<FunFact[]>;  
  funFactIdUpdate = null;  
  massage = null; 

  constructor(private formbulider: FormBuilder, private funFactService:FunFactService) { }

  ngOnInit() {
    this.funFactForm = this.formbulider.group({  
            FunFactDesc: ['', [Validators.required]],  
    });
    this.loadAllFunFacts();
  }
  loadAllFunFacts(){
    this.allFunFacts = this.funFactService.getAllFunFact();
  }
  onFormSubmit() 
        {this.dataSaved = false;  
        const funFact = this.funFactForm.value;  
        this.CreateFunFact(funFact);  
        this.funFactForm.reset();  
      } 
    loadFunFactToEdit(funFactId: string) {  
          this.funFactService.getFunFactById(funFactId).subscribe(funFact=> {  
            this.massage = null;  
            this.dataSaved = false;  
            this.funFactIdUpdate = funFact.FunfactID;  
            this.funFactForm.controls['FunFactDesc'].setValue
      (funFact.FunFactDesc);   
      });
    }
CreateFunFact(funFact: FunFact)
{
  if (this.funFactIdUpdate == null) {  
          this.funFactService.createFunFact(funFact).subscribe(  
            () => {  
              this.dataSaved = true;  
              this.massage = 'Record saved Successfully';  
              this.loadAllFunFacts();  
              this.funFactIdUpdate = null;  
              this.funFactForm.reset();  
            }  
          );  
        } else {  
            funFact.FunfactID= this.funFactIdUpdate;  
          this.funFactService.updateFunFact(funFact).subscribe(() => {  
            this.dataSaved = true;  
            this.massage = 'Record Updated Successfully';  
            this.loadAllFunFacts();  
            this.funFactIdUpdate = null;  
            this.funFactForm.reset();  
          });  
        }  
      }  
    deleteFunFact(funFactId: string) {  
      console.log(funFactId);
          if (confirm("Are you sure you want to delete this ?")) {   
          this.funFactService.deleteFunFactById(funFactId).subscribe(() => {  
            this.dataSaved = true;  
            this.massage = 'Record Deleted Succefully';  
            this.loadAllFunFacts();  
            this.funFactIdUpdate = null;  
            this.funFactForm.reset();  
        
          });  
        }  
      }  
        resetForm() {  
          this.funFactForm.reset();  
          this.massage = null;  
          this.dataSaved = false;  
        }  
      }  
