import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RetiroComponent } from './components/retiro/retiro.component';
import { SobreOngComponent } from './components/sobre-ong/sobre-ong.component';
import { SharedModule } from './shared/shared.module';
import { SejaApoiadorComponent } from './components/seja-apoiador/seja-apoiador.component';
import { AtividadesComponent } from './components/atividades/atividades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RetiroComponent,
    InicioComponent,
    SobreOngComponent,
    SejaApoiadorComponent,
    AtividadesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatCardModule,
  ],
})
export class AppModule {}
