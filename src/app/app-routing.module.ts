import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormsComponent } from './components/forms/forms.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
{
path:'',
redirectTo:'home',
pathMatch:'full'
},
{
path:'home',
component:HomeComponent
},
{
path:'forms',
component:FormsComponent
},
{
  path:'detail/:id',
  component:DetailComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
