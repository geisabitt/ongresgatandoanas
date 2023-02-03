import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppModule } from '../../app.module';
import { ApoieComponent } from './apoie/apoie.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [
    HomeComponent,
    CursosComponent,
    SobreComponent,
    ApoieComponent,
  ],
  imports: [CommonModule, SharedModule, AppModule],
})
export class PagesModule {}
