import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './shared/layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from  '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProyectComponent } from './proyect/proyect.component';
import { SpecializationComponent } from './specialization/specialization.component'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    AboutmeComponent,
    ProyectComponent,
    SpecializationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
