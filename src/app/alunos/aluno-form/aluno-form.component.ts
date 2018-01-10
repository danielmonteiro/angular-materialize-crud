import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';
import { IFormCanDeactivate } from './../../guards/iform-can-deactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {

    inscricao: Subscription;
    aluno: Aluno;
    formMudou: boolean = false;

  constructor(private route: ActivatedRoute, private alunosService: AlunosService, private router: Router) { }


    ngOnInit() {
        this.inscricao = this.route.params.subscribe(
          (params) => {
              this.aluno = this.alunosService.getAluno(params['id']);

              if(this.aluno == null){
                  this.aluno = new Aluno();
              }
          }
        );
    }

    ngOnDestroy(){
        this.inscricao.unsubscribe();
    }

    onInput() {
        this.formMudou = true;
    }

    podeMudarRota(){
        if(this.formMudou){
            return confirm("Deseja sair sem salvar os dados?");
        }

        return true;
    }

    podeDesativar(){
        return this.podeMudarRota();
    }

}
