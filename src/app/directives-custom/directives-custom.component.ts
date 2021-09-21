import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-custom',
  templateUrl: './directives-custom.component.html',
  styleUrls: ['./directives-custom.component.scss']
})
export class DirectivesCustomComponent implements OnInit {

  cursos: string[] = [];
  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowCourses() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
