import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { GeneralinformationComponent } from './generalinformation/generalinformation.component';
import { FrequentlyaskedquestionComponent } from './frequentlyaskedquestion/frequentlyaskedquestion.component';
import { EmergencycontactComponent } from './emergencycontact/emergencycontact.component';

const routes: Routes = [
{path: 'generalinformation', component: GeneralinformationComponent },
{path: 'frequentlyaskedquestion', component: FrequentlyaskedquestionComponent },
{path: 'emergencycontact', component: EmergencycontactComponent }

]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
   
  

export class AppRoutingModule { }
export const routingComponents = [GeneralinformationComponent, FrequentlyaskedquestionComponent, EmergencycontactComponent ]
