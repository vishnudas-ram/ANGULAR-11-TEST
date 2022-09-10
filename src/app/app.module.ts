import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { TemplatefmComponent } from './templatefm/templatefm.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { ModeldrivenComponent } from './modeldriven/modeldriven.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormvalidAngComponent } from './formvalid-ang/formvalid-ang.component';
import { HttpaccessComponent } from './httpaccess/httpaccess.component';
import { HttpClientModule } from '@angular/common/http';
import { ObjectComponent } from './object/object.component';
import {ServicesService} from './services.service';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TemplatefmComponent,
    DirectivesComponent,
    ModeldrivenComponent,
    FormvalidAngComponent,
    HttpaccessComponent,
    ObjectComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
