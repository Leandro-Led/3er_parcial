import { Component } from '@angular/core';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, RowComponent, TableActiveDirective, TableColorDirective, TableDirective } from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';
import { SalaModel } from "../models/sala.model";
import { SalaService } from "../services/sala.service";

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [RowComponent, ColComponent,CardComponent,CardHeaderComponent, CardBodyComponent,DocsExampleComponent,TableDirective, TableColorDirective, TableActiveDirective,ButtonDirective],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.scss'
})
export class ReportesComponent {
  listaSalas:SalaModel[]=[];
  SalaModelo:SalaModel=new SalaModel()
  constructor(private SalaService: SalaService){
    this.duracionTotalPorUsuario();
  }
  duracionTotalPorUsuario(){
    this.SalaService.duracionTotalPorUsuario().subscribe({
      next:(respuesta)=>{
        console.log(respuesta);
        this.listaSalas=respuesta;
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }
}

