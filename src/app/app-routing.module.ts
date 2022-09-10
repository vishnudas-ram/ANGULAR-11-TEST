import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { TemplatefmComponent } from './templatefm/templatefm.component';
import { DirectivesComponent } from './directives/directives.component';
import { ModeldrivenComponent } from './modeldriven/modeldriven.component';
import { FormvalidAngComponent } from './formvalid-ang/formvalid-ang.component';
import { HttpaccessComponent } from './httpaccess/httpaccess.component';
import { ObjectComponent } from './object/object.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [{path:'binding',component:BindingComponent},
{path:'template',component:TemplatefmComponent},
{path:'directive',component:DirectivesComponent},
{path:'modeldriven',component:ModeldrivenComponent},
{path:'formvalid',component:FormvalidAngComponent},
{path:'httpaccess',component:HttpaccessComponent},
{path:'object',component:ObjectComponent},
{path:'service',component:ServicesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
