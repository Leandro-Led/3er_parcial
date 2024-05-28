import {HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PeliculaModel } from "../models/pelicula.model";
@Injectable({
    providedIn:'root'
})
export class PeliculaService{
    //url de su api(backend)
    private API_URL="http://localhost:8000/cartelera"
    constructor(private http: HttpClient){

    }
    traerPeliculas():Observable<PeliculaModel[]>{
        return this.http.get<PeliculaModel[]>(`${this.API_URL}/traerPeliculas`);
    }
    crearPelicula(pelicula:PeliculaModel): Observable<PeliculaModel>{
        return this.http.post<PeliculaModel>(`${this.API_URL}/crearPelicula`,pelicula)
    }
    
    editarPelicula(pelicula:PeliculaModel): Observable<PeliculaModel>{
        return this.http.put<PeliculaModel>(`${this.API_URL}/editarPelicula/${pelicula._id}`,pelicula)
    }

    eliminarPelicula(idPelicula:string):Observable<PeliculaModel>{
        return this.http.delete<PeliculaModel>(this.API_URL+`/eliminarPelicula/`+idPelicula);
    }
}
