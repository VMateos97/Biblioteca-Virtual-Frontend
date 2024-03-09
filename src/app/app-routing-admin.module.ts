import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuAdminComponent } from './componentes/menu-admin/menu-admin.component';
import { DependenciaComponent } from './componentes/dependencia/dependencia.component';
import { PeriodoComponent } from './componentes/periodo/periodo.component';
import { CarreraComponent } from './componentes/carrera/carrera.component';
import { AsesorInternoComponent } from './componentes/asesor-interno/asesor-interno.component';
import { AsesorgeneralComponent } from './componentes/asesorgeneral/asesorgeneral.component';
import { ResidenciaComponent } from './componentes/residencia/residencia.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { AsesorExternoComponent } from './componentes/asesor-externo/asesor-externo.component';

const routes: Routes = [
  {path:"menu-admin",component:MenuAdminComponent},
  {path:"dependencia",component:DependenciaComponent},
  {path:"periodo",component:PeriodoComponent},
  {path:"carrera",component:CarreraComponent},
  {path:"asesorinterno",component:AsesorInternoComponent},
  {path:"asesorexterno",component:AsesorExternoComponent},
  {path:"asesorgeneral",component:AsesorgeneralComponent},
  {path:"residencia",component:ResidenciaComponent},
  {path:"alumno",component:AlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    HttpClientModule
],
  exports: [RouterModule],
  declarations: [
    MenuAdminComponent,
    DependenciaComponent,
    PeriodoComponent,
    CarreraComponent,
    AsesorInternoComponent,
    AsesorExternoComponent,
    AsesorgeneralComponent,
    ResidenciaComponent,
    AlumnoComponent
  ]
})
export class AppRoutingAdminModule { }
