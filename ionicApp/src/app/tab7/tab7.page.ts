import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import {FunFactService} from '../fun-fact.service'; 
import {FunFact} from '../fun-fact';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page implements OnInit {
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
}
