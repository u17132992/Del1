import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { FrequentlyaskedquestionService } from '../frequentlyaskedquestion.service'; 
import { Frequentlyaskedquestion } from '../frequentlyaskedquestion';

@Component({
  selector: 'app-frequentlyaskedquestion',
  templateUrl: './frequentlyaskedquestion.component.html',
  styleUrls: ['./frequentlyaskedquestion.component.css']
})
export class FrequentlyaskedquestionComponent implements OnInit {
  dataSaved = false;  
   frequentlyaskedquestionForm: any;  
  allFrequentlyaskedquestions: Observable<Frequentlyaskedquestion[]>;  
  frequentlyaskedquestionIdUpdate = null;  
  massage = null; 

  constructor(private formbulider: FormBuilder, private frequentlyaskedquestionService:FrequentlyaskedquestionService) { }

  ngOnInit() {
    this.frequentlyaskedquestionForm = this.formbulider.group({  
            faqDesc: ['', [Validators.required]]
    });
    this.loadAllFrequentlyaskedquestions();
  }
  loadAllFrequentlyaskedquestions(){
    this.allFrequentlyaskedquestions = this.frequentlyaskedquestionService.getAllFrequentlyaskedquestion();
  }
  onFormSubmit() 
        {this.dataSaved = false;  
        const frequentlyaskedquestion = this.frequentlyaskedquestionForm.value;  
        this.CreateFrequentlyaskedquestion(frequentlyaskedquestion);  
        this.frequentlyaskedquestionForm.reset();  
      } 
    loadFrequentlyaskedquestionToEdit(frequentlyaskedquestionId: string) {  
          this.frequentlyaskedquestionService.getFrequentlyaskedquestionById(frequentlyaskedquestionId).subscribe(frequentlyaskedquestion=> {  
            this.massage = null;  
            this.dataSaved = false;  
            this.frequentlyaskedquestionIdUpdate = frequentlyaskedquestion.FaqID;  
            this.frequentlyaskedquestionForm.controls['faqDesc'].setValue
      (frequentlyaskedquestion.faqDesc);   
      });
    }
CreateFrequentlyaskedquestion(frequentlyaskedquestion: Frequentlyaskedquestion)
{
  if (this.frequentlyaskedquestionIdUpdate == null) {  
          this.frequentlyaskedquestionService.createFrequentlyaskedquestion(frequentlyaskedquestion).subscribe(  
            () => {  
              this.dataSaved = true;  
              this.massage = 'Record saved Successfully';  
              this.loadAllFrequentlyaskedquestions();  
              this.frequentlyaskedquestionIdUpdate = null;  
              this.frequentlyaskedquestionForm.reset();  
            }  
          );  
        } else {  
            frequentlyaskedquestion.FaqID = this.frequentlyaskedquestionIdUpdate;  
          this.frequentlyaskedquestionService.updateFrequentlyaskedquestion(frequentlyaskedquestion).subscribe(() => {  
            this.dataSaved = true;  
            this.massage = 'Record Updated Successfully';  
            this.loadAllFrequentlyaskedquestions();  
            this.frequentlyaskedquestionIdUpdate = null;  
            this.frequentlyaskedquestionForm.reset();  
          });  
        }  
      }  
    deleteFrequentlyaskedquestion(frequentlyaskedquestionId: string) {  
      console.log(frequentlyaskedquestionId);
          if (confirm("Are you sure you want to delete this ?")) {   
          this.frequentlyaskedquestionService.deleteFrequentlyaskedquestionById(frequentlyaskedquestionId).subscribe(() => {  
            this.dataSaved = true;  
            this.massage = 'Record Deleted Succefully';  
            this.loadAllFrequentlyaskedquestions();  
            this.frequentlyaskedquestionIdUpdate = null;  
            this.frequentlyaskedquestionForm.reset();  
        
          });  
        }  
      }  
        resetForm() {  
          this.frequentlyaskedquestionForm.reset();  
          this.massage = null;  
          this.dataSaved = false;  
        }  
      }  
