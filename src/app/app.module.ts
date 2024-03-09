import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRoutingAdminModule } from './app-routing-admin.module';
import { AppRoutingResidenciaModule } from './app-routing-residencia.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  //  NgbModule,
    AppRoutingModule,
    AppRoutingAdminModule,
    AppRoutingResidenciaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
