import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

    cursos: any[];
    pagina: number;
    inscricao: Subscription;

  constructor(private cursosService: CursosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

      this.inscricao = this.route.queryParams.subscribe(
          queryParams => {
              this.pagina = queryParams.pagina

              let start = this.pagina * 2 - 2;
              let cursosTemp = this.cursosService.getCursos();
              this.cursos = cursosTemp.slice(start, start + 2);
          }
      );

  }

  ngOnDestroy(){
      this.inscricao.unsubscribe();
  }

  goToPage(pagina){
      this.router.navigate(['/cursos'], {
          queryParams: {
              'pagina': pagina
          }
      });
  }

  goToNextPage(){
      if(this.pagina < 5){
          this.goToPage(++this.pagina);
      }
  }

  goToPreviousPage(){
      if(this.pagina > 1){
          this.goToPage(--this.pagina);
      }
  }

  isInPage(page){
      return (this.pagina == page) ? true : false;
  }

}
