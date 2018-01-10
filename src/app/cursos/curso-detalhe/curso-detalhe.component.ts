import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

    inscricao: Subscription;
    curso;

  constructor(private route: ActivatedRoute, private cursosService: CursosService, private router: Router) {
  }

  ngOnInit() {
      this.inscricao = this.route.params.subscribe(
        (params) => {
            this.curso = this.cursosService.getCurso(params['id']);

            if(this.curso == null){
                this.router.navigate(['/cursos/nao-encontrado']);
            }
        }
      );
  }

  ngOnDestroy(){
      this.inscricao.unsubscribe();
  }

}
