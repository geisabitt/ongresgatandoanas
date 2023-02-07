import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtividadesComponent } from './components/atividades/atividades.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SejaApoiadorComponent } from './components/seja-apoiador/seja-apoiador.component';
import { SobreOngComponent } from './components/sobre-ong/sobre-ong.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'sobre', component: SobreOngComponent },
  { path: 'atividades', component: AtividadesComponent },
  { path: 'sejaApoiador', component: SejaApoiadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
