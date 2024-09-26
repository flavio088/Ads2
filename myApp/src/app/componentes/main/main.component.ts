import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  islogged=true;
  aula: any[] = [
    {nome: 'frontend', professor: 'marlon'},
    {nome: 'backend', professor: 'maria'},
    {nome: 'engenharia de dados', professor: 'marcos'},
    {nome: 'banco de dados', professor: 'maycon'}
  ]

}
