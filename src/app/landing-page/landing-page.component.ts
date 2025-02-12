import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-landing-page',
  imports: [ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [
        {
        titulo : 'violet evergarden',
        fechalanzamiento: new Date(),
        precio : 1400.99,
        poster: 'https://i.pinimg.com/736x/77/5d/64/775d6470346699e33244d6c85baec490.jpg'
       },
       {
       titulo : 'kanon',
       fechalanzamiento: new Date(),
       precio : 1400.99,
       poster: 'https://m.media-amazon.com/images/S/pv-target-images/d8ba16cf958ce336344f38a65f38d863149106d8b2bd618c5066c75b8a1bfc6f.jpg'
      },
      {
        titulo : 'a silent voice',
        fechalanzamiento: new Date(),
        precio : 1400.99,
        poster: 'https://lwlies.com/wp-content/uploads/2017/03/a-silent-voice.jpg'
       },
       {
        titulo : 'el jardín de las palabras',
        fechalanzamiento: new Date(),
        precio : 1400.99,
        poster: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2014/03/302286-edicion-castellano-jardin-palabras.jpg?tf=3840x'
       },
      
      ];

      this.peliculasProximosExtrenos = [{
        
          titulo : 'el castillo ambulante',
          fechalanzamiento: new Date(),
          precio : 1400.99,
          poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQPUwbM0tx4oiWUO9oDBgOD5sPHYXOQJdpw&s'
         },
         {
          titulo : 'wolf children',
          fechalanzamiento: new Date(),
          precio : 1400.99,
          poster: 'https://play-lh.googleusercontent.com/proxy/AwhbyUGSZPJHSpPK_6YQuRH3WCELc7T_u-IzoUb7Nv2Ev9UZkPq_QrYDDbpmH9DRbE3SZbQJGflt4yvNBGun7lnerSTGWJJNIsxM77Q1T5mGjH4AgKViEw=s3840-w3840-h2160'
         },
         {
          titulo : 'la tumba de las luciernagas',
          fechalanzamiento: new Date(),
          precio : 1400.99,
          poster: 'https://peru21-pe.b-cdn.net/sites/default/efsfiles/2025-01/3tx4tufmazg6hmudnvdhc3ymia.jpg'
         }];
    }, 100);
  }

    peliculasEnCines!: any[];
    peliculasProximosExtrenos!: any[];
}
