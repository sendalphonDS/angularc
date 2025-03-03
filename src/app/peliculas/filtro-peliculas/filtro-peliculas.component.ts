import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ListadoPeliculasComponent } from "../listado-peliculas/listado-peliculas.component";
import { FiltroPeliculas } from './filtroPeliculas';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, ListadoPeliculasComponent],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent implements OnInit {
  ngOnInit(): void {
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value as FiltroPeliculas);
    this.form.valueChanges.subscribe(valores =>{
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores as FiltroPeliculas)
      this.escribirParametrosBusquedaEnURL(valores as FiltroPeliculas);
     
    });
  }

  buscarPeliculas(valores: FiltroPeliculas){
    if(valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }
    if (valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }
    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }
    if(valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }
   
  escribirParametrosBusquedaEnURL(valores: FiltroPeliculas){
    let queryStrings = [];
    if (valores.titulo){
      queryStrings.push(`titulo=${encodeURIComponent(valores.titulo)}`);
    }
     if(valores.generoId !== 0){
       queryStrings.push(`generoId=${valores.generoId}`);
     }
     if(valores.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valores.proximosEstrenos}`);
    }

    if(valores.enCines){
      queryStrings.push(`enCines=${valores.enCines}`);
    }

    this.location.replaceState('peliculas/filtrar', queryStrings.join('&'));
  }

  leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params: any) => {
      var objeto: any = {};
      if (params.titulo){
        objeto.titulo = params.titulo;
      }
      if(params.generoId){
        objeto.generoId = Number(params.generoId);
      }
      if(params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }
      if (params.enCines){
        objeto.enCines = params.enCines;
      }
      this.form.patchValue(objeto);

    });
  }




  limpiar(){
    this.form.patchValue({titulo: '',generoId: 0, proximosEstrenos: false, enCines: false});
  }

  private formBuilder = inject(FormBuilder);
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);

  form = this.formBuilder.group ({
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  })

  generos = [
    {id: 1, nombre: "Drama"},
    {id: 2, nombre: "Accion"},
    {id: 3, nombre: "Comedia"}
  ]

  peliculasOriginal = [
    {
    titulo : 'violet evergarden',
    fechalanzamiento: new Date(),
    precio : 1400.99,
    poster: 'https://i.pinimg.com/736x/77/5d/64/775d6470346699e33244d6c85baec490.jpg',
    generos: [1,2,3],
    enCines:true,
    proximosEstrenos:false
    },
   {
   titulo : 'kanon',
   fechalanzamiento: new Date(),
   precio : 1400.99,
   poster: 'https://m.media-amazon.com/images/S/pv-target-images/d8ba16cf958ce336344f38a65f38d863149106d8b2bd618c5066c75b8a1bfc6f.jpg',
   generos: [1,3],
   enCines:false,
  proximosEstrenos:true
  },
  {
    titulo : 'a silent voice',
    fechalanzamiento: new Date(),
    precio : 1400.99,
    poster: 'https://lwlies.com/wp-content/uploads/2017/03/a-silent-voice.jpg',
    generos: [3],
    enCines:false,
    proximosEstrenos:false

   },
   {
    titulo : 'el jardín de las palabras',
    fechalanzamiento: new Date(),
    precio : 1400.99,
    poster: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2014/03/302286-edicion-castellano-jardin-palabras.jpg?tf=3840x',
    generos: [],
    enCines:true,
    proximosEstrenos:false
   },
  


  {
    
      titulo : 'el castillo ambulante',
      fechalanzamiento: new Date(),
      precio : 1400.99,
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQPUwbM0tx4oiWUO9oDBgOD5sPHYXOQJdpw&s',
      generos: [1,3],
      enCines:false,
      proximosEstrenos:true

     },
     {
      titulo : 'wolf children',
      fechalanzamiento: new Date(),
      precio : 1400.99,
      poster: 'https://play-lh.googleusercontent.com/proxy/AwhbyUGSZPJHSpPK_6YQuRH3WCELc7T_u-IzoUb7Nv2Ev9UZkPq_QrYDDbpmH9DRbE3SZbQJGflt4yvNBGun7lnerSTGWJJNIsxM77Q1T5mGjH4AgKViEw=s3840-w3840-h2160',
      generos: [1],
      enCines:false,
      proximosEstrenos:false
     },
     {
      titulo : 'la tumba de las luciernagas',
      fechalanzamiento: new Date(),
      precio : 1400.99,
      poster: 'https://peru21-pe.b-cdn.net/sites/default/efsfiles/2025-01/3tx4tufmazg6hmudnvdhc3ymia.jpg',
      generos: [3],
      enCines:true,
      proximosEstrenos:false
     }];

     peliculas = this.peliculasOriginal;
}
