import { Component, Input, numberAttribute } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-editar-cine',
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  @Input({transform: numberAttribute})
  id!: number;

  cine: cineDTO ={id: 1 , nombre: 'Acropolis'}

  guardarCambios(cine: cineCreacionDTO){
    console.log('editar Cine', cine);
  }
}
