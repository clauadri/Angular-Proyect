import { RopaMujerMoreComponent } from './pages/ropa-mujer/ropa-mujer-more/ropa-mujer-more.component';
import { RopaHombreMoreComponent } from './pages/ropa-hombre/ropa-hombre-more/ropa-hombre-more.component';
import { ColeccionesComponent } from './pages/colecciones/colecciones.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { RopaMujerComponent } from './pages/ropa-mujer/ropa-mujer.component';
import { RopaHombreComponent } from './pages/ropa-hombre/ropa-hombre.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path: 'ropahombre', component:RopaHombreComponent},
  {path: 'ropahombre/:id', component:RopaHombreMoreComponent},
  {path: 'ropamujer', component:RopaMujerComponent},
  {path: 'ropamujer/:id', component:RopaMujerMoreComponent},
  {path: 'accesorios', component:AccesoriosComponent},
  {path: 'colecciones', component:ColeccionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
