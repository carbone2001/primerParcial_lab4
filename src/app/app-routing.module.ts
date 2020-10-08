import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './presentacion/detalle/detalle.component';
import { ListadoComponent } from './presentacion/listado/listado.component';
import { NotFoundComponent } from './presentacion/not-found/not-found.component';

const routes: Routes = [
  {
    path:'listado',
    component:ListadoComponent
  },
  {
    path:'detalle',
    component:DetalleComponent,
    children:[
      {
        path:'**',
        component:DetalleComponent
      }
    ]
  },
  {
    path:"",
    component:ListadoComponent
  },
  {
    path:'not-found',
    component:NotFoundComponent
  },
  {
    path:"**",
    redirectTo:'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
