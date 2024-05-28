import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective } from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';
import { PeliculaModel } from "../models/pelicula.model";
import { PeliculaService } from "../services/pelicula.service";

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [RowComponent, ColComponent,CardComponent,CardHeaderComponent, CardBodyComponent,DocsExampleComponent,FormsModule,FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective, NgStyle,FormSelectDirective,TableDirective, TableColorDirective, TableActiveDirective],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.scss'
})
export class PeliculaComponent {
  listaPeliculas:PeliculaModel[]=[];
  peliculaModelo:PeliculaModel=new PeliculaModel()
  constructor(private peliculaService: PeliculaService){
    this.traerPeliculas();
  }
  traerPeliculas() {
    this.peliculaService.traerPeliculas().subscribe({
      next:(respuesta)=>{
        console.log(respuesta);
        this.listaPeliculas=respuesta;
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }
  crearPelicula(){
    console.log(this.peliculaModelo);
    if (this.peliculaModelo._id=='') {
      console.log("Guardar",this.peliculaModelo);
    }
    else{
      console.log("editar",this.peliculaModelo._id);
      
    }
  }
  agregarPelicula(){
    this.peliculaService.crearPelicula(this.peliculaModelo).subscribe({
      next:(respuesta)=>{
        console.log('Se guardo exitosamente ',respuesta);
        //this.listaPeliculas=respuesta;
        this.traerPeliculas()
        this.peliculaModelo=new PeliculaModel()
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }

  eliminarPelicula(pelicula:PeliculaModel){
    console.log("Item para eliminar", pelicula);
    this.peliculaService.eliminarPelicula(pelicula._id).subscribe({
      next:(respuesta)=>{
        console.log('Se elimino exitosamente ',respuesta);
        //this.listaPeliculas=respuesta;
        this.traerPeliculas()
        //this.peliculaModelo=new PeliculaModel()
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }

  verPelicula(pelicula:PeliculaModel){
    this.peliculaModelo=pelicula
  }

  editarPelicula(pelicula:PeliculaModel){
    //this.peliculaModelo=pelicula
    this.peliculaService.editarPelicula(this.peliculaModelo).subscribe({
      next:(respuesta)=>{
        console.log('Se edito exitosamente ',respuesta);
        //this.listaPeliculas=respuesta;
        this.traerPeliculas()
        this.peliculaModelo=new PeliculaModel()
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
    console.log("Pelicula a editar",pelicula);
  }

}
