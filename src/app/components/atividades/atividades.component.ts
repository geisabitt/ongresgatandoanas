import { Component } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  tipo: string;
  descricao: string;
  valor: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    nome: 'crochê',
    tipo: 'artesanato',
    descricao: 'curso de artesanato manual',
    valor: '10,00',
  },
  {
    nome: 'crochê',
    tipo: 'artesanato',
    descricao: 'curso de artesanato manual',
    valor: '10,00',
  },
  {
    nome: 'crochê',
    tipo: 'artesanato',
    descricao: 'curso de artesanato manual',
    valor: '10,00',
  },
  {
    nome: 'crochê',
    tipo: 'artesanato',
    descricao: 'curso de artesanato manual',
    valor: '10,00',
  },
  {
    nome: 'crochê',
    tipo: 'artesanato',
    descricao: 'curso de artesanato manual',
    valor: '10,00',
  },
  {
    nome: 'crochê',
    tipo: 'artesanato',
    descricao: 'curso de artesanato manual',
    valor: '10,00',
  },
  {
    nome: 'crochê',
    tipo: 'artesanato',
    descricao: 'curso de artesanato manual',
    valor: '10,00',
  },
  {
    nome: 'crochê',
    tipo: 'artesanato',
    descricao: 'curso de artesanato manual',
    valor: '10,00',
  },
  {
    nome: 'crochê',
    tipo: 'artesanato',
    descricao: 'curso de artesanato manual',
    valor: '10,00',
  },
  {
    nome: 'crochê',
    tipo: 'artesanato',
    descricao: 'curso de artesanato manual',
    valor: '10,00',
  },
];

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.scss'],
})
export class AtividadesComponent {
  displayedColumns: string[] = ['nome', 'tipo', 'descricao', 'valor'];
  dataSource = ELEMENT_DATA;
}
