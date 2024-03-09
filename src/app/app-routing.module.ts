import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component';
import { LogingeneralComponent } from './componentes/logingeneral/logingeneral.component';
import { LoginestudianteComponent } from './componentes/loginestudiante/loginestudiante.component';
import { LoginadminComponent } from './componentes/loginadmin/loginadmin.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"logingeneral",component:LogingeneralComponent},
  {path:"loginestudiante",component:LoginestudianteComponent},
  {path:"loginadmin",component:LoginadminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    HttpClientModule
],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    LoginComponent,
    LogingeneralComponent,
    LoginestudianteComponent,
    LoginadminComponent
  ]
})
export class AppRoutingModule { }
