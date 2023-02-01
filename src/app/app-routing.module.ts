import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApoieComponent } from './components/pages/apoie/apoie.component';
import { CursosComponent } from './components/pages/cursos/cursos.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'apoie', component: ApoieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
