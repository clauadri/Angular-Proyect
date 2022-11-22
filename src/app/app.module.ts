import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RopaHombreComponent } from './pages/ropa-hombre/ropa-hombre.component';
import { RopaMujerComponent } from './pages/ropa-mujer/ropa-mujer.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { RopaHombreMoreComponent } from './pages/ropa-hombre/ropa-hombre-more/ropa-hombre-more.component';
import { RopaMujerMoreComponent } from './pages/ropa-mujer/ropa-mujer-more/ropa-mujer-more.component';
import { ImgHomeComponent } from './components/imgHome/img-home/img-home.component';
import { NewRopaHombreComponent } from './pages/crea-ropa/new-ropa-hombre/new-ropa-hombre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreaRopaComponent } from './pages/crea-ropa/crea-ropa.component';
import { ColleccionesComponent } from './pages/collecciones/collecciones.component';
import { NewRopaMujerComponent } from './pages/crea-ropa/new-ropa-mujer/new-ropa-mujer.component';
import { EditRopaHombreComponent } from './pages/crea-ropa/edit-ropa-hombre/edit-ropa-hombre.component';
import { EditRopaMujerComponent } from './pages/crea-ropa/edit-ropa-mujer/edit-ropa-mujer.component';
import { UsermenuComponent } from './components/usermenu/usermenu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RopaHombreComponent,
    RopaMujerComponent,
    AccesoriosComponent,
    NavbarComponent,
    RopaHombreMoreComponent,
    RopaMujerMoreComponent,
    ImgHomeComponent,
    NewRopaHombreComponent,
    CreaRopaComponent,
    ColleccionesComponent,
    NewRopaMujerComponent,
    EditRopaHombreComponent,
    EditRopaMujerComponent,
    UsermenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
