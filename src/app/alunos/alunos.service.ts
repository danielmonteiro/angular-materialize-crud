import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

    private alunos: any[] = [
        { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
        { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
        { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' }
    ]

  constructor() { }

  getAlunos(){
      return this.alunos;
  }

  getAluno(id: number){
      for(var i=0; i<this.alunos.length; i++){
        if(this.alunos[i].id == id){
            return this.alunos[i];
        }
      }
      return null;
  }

}
