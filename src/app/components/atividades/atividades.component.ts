import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Cursos } from '../model/cursos';
import { CursosService } from './../service/cursos.service';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.scss'],
})
export class AtividadesComponent {
  cursos$: Observable<Cursos[]>;
  cursos: Cursos[] = [];
  displayedColumns: string[] = ['nome', 'tipo', 'descricao', 'valor'];

  constructor(private cursosService: CursosService) {
    this.cursos$ = this.cursosService.list();

    this.cursosService.list().subscribe((cursos) => (this.cursos = cursos));
  }
}
