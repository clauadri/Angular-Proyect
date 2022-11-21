import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RopaHombreComponent } from './pages/ropa-hombre/ropa-hombre.component';
import { RopaMujerComponent } from './pages/ropa-mujer/ropa-mujer.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { ColeccionesComponent } from './pages/colecciones/colecciones.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RopaHombreMoreComponent } from './pages/ropa-hombre/ropa-hombre-more/ropa-hombre-more.component';
import { RopaMujerMoreComponent } from './pages/ropa-mujer/ropa-mujer-more/ropa-mujer-more.component';
import { ImgHomeComponent } from './components/imgHome/img-home/img-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RopaHombreComponent,
    RopaMujerComponent,
    AccesoriosComponent,
    ColeccionesComponent,
    NavbarComponent,
    RopaHombreMoreComponent,
    RopaMujerMoreComponent,
    ImgHomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
