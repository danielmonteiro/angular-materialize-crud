import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Aluno } from './../alunos/aluno';
import { AlunosService } from './../alunos/alunos.service';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

  constructor(private alunosService: AlunosService) {}

      resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<any>|Promise<any>|any {

          console.log("AlunoDetalheResolver");

          let id = route.params['id'];

          return this.alunosService.getAluno(id);

      }
}
