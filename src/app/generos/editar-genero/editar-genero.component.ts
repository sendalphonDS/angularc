import { Component, Input, input, numberAttribute } from '@angular/core';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO, GeneroDTO } from '../generos';

@Component({
  selector: 'app-editar-genero',
  imports: [FormularioGeneroComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {
  @Input({transform: numberAttribute})
id!: number;

  genero: GeneroDTO ={id: 1, nombre:'comedia'};
  guardarCambios(genero: GeneroCreacionDTO){
    console.log('editando  el genero', genero);
  }

}
