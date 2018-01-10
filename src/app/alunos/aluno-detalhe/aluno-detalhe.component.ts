import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

    inscricao: Subscription;
    aluno: Aluno;

  constructor(private route: ActivatedRoute, private alunosService: AlunosService, private router: Router) { }


    ngOnInit() {

        console.log("ngOnInit: AlunoDetalheComponent");

        this.inscricao = this.route.data.subscribe(
          (info) => {
              this.aluno = info.aluno;
              console.log(this.aluno);
          }
        );
    }

    ngOnDestroy(){
        this.inscricao.unsubscribe();
    }

    editarContato(){
        this.router.navigate(['/alunos', this.aluno.id, 'editar']);
    }

}
