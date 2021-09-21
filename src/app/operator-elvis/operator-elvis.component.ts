import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator-elvis',
  templateUrl: './operator-elvis.component.html',
  styleUrls: ['./operator-elvis.component.scss']
})
export class OperatorElvisComponent implements OnInit {

  tarefa: any = {
    desc: 'Descrição da tarefa',
    responsável: {
      usuario: null
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
