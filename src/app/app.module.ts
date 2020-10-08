import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoComponent } from './presentacion/listado/listado.component';
import { DetalleComponent } from './presentacion/detalle/detalle.component';
import { ListadoPokemonesComponent } from './logica/listado-pokemones/listado-pokemones.component';
import { MostrarDetallesComponent } from './logica/mostrar-detalles/mostrar-detalles.component';
import { SpinnerComponent } from './logica/spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './presentacion/not-found/not-found.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent,
    ListadoPokemonesComponent,
    MostrarDetallesComponent,
    SpinnerComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    MatGridListModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
