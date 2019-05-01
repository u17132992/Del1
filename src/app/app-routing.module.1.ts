import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { SymptomComponent } from './symptom/symptom.component';
import { TreatmentComponent } from './treatment/treatment.component';

const routes: Routes = [

{path: 'symptom', component: SymptomComponent},
{path: 'treatment', component: TreatmentComponent}

]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
   
  

export class AppRoutingModule { }
export const routingComponents = [ SymptomComponent, TreatmentComponent]
