import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GeneralinformationService } from './generalinformation.service';  
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import {  
    MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
    MatInputModule, MatTooltipModule, MatToolbarModule  
  } from '@angular/material';  
import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { GeneralinformationComponent } from './generalinformation/generalinformation.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrequentlyaskedquestionComponent } from './frequentlyaskedquestion/frequentlyaskedquestion.component';
import { FrequentlyaskedquestionService } from './frequentlyaskedquestion.service';
import { EmergencycontactComponent } from './emergencycontact/emergencycontact.component';
import { EmergencycontactService } from './emergencycontact.service';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    GeneralinformationComponent,
    FrequentlyaskedquestionComponent,
    EmergencycontactComponent      
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
   MatButtonModule,
  MatMenuModule,    
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,
    AppRoutingModule 
    
  ],
  providers: [HttpClientModule, GeneralinformationService, FrequentlyaskedquestionService, EmergencycontactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
