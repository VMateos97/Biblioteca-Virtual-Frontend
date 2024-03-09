import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VistaResidenciaComponent } from './componentes/vista-residencia/vista-residencia.component';

const routes: Routes = [
  {path:"vista-residencia",component:VistaResidenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    HttpClientModule
],
  exports: [RouterModule],
  declarations: [
    VistaResidenciaComponent
  ]
})
export class AppRoutingResidenciaModule { }
