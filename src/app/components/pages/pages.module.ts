import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApoieComponent } from './apoie/apoie.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [
    HomeComponent,
    CursosComponent,
    SobreComponent,
    ApoieComponent,
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
