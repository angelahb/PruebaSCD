import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
{ path: '', component: ListarComponent },
{ path: 'agregar', component: AgregarComponent },
{ path: 'editar/:id', component: EditarComponent },
{ path: '**', component: ListarComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
