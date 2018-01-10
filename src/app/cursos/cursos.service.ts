import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(){
      return [
          {id: 1, name: 'Angular1'},
          {id: 2, name: 'Java1'},
          {id: 3, name: 'Angular2'},
          {id: 4, name: 'Java2'},
          {id: 5, name: 'Angular3'},
          {id: 6, name: 'Java3'},
          {id: 7, name: 'Angular4'},
          {id: 8, name: 'Java4'},
          {id: 9, name: 'Angular5'},
          {id: 10, name: 'Java5'}
      ]
  }

  getCurso(id: number){
      let cursos = this.getCursos();
      for(let i=0; i<cursos.length; i++){
          let curso = cursos[i];
          if(curso.id == id){
              return curso;
          }
      }
      return null;
  }

}
