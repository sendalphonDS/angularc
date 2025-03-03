import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule}  from '@angular/material/table';
import { actorAutoCompleteDTO } from '../actores';

@Component({
  selector: 'app-autocomplete-actores',
  imports: [MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, FormsModule, MatTableModule, MatInputModule],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent {

  control = new FormControl();

  actores: actorAutoCompleteDTO[] = [
  {
    id: 1, nombre: 'ruka chan', personaje:'', foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrC1oxgTrxjAMggr1awHUJskH9icIeXVfMH6RNulyIRYnZdJy4TKHRsJDP9ERKp_Tvjc&usqp=CAU'
  }, 
  {id: 2, nombre: 'rem', personaje:'', foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6Ym4ig2JMes_IeCNn5H7DzLGumM72QGCjg&s'},
  {id: 2, nombre: 'azuka', personaje:'', foto:'https://sm.ign.com/t/ign_latam/screenshot/default/template-7_w8p7.1200.jpg'},
]

  actoresSeleccionados: actorAutoCompleteDTO[] = [];

  columnasAMostrar = ['imagen' , 'nombre', 'personajes', 'acciones'];

  actorSeleccionado(event: MatAutocompleteSelectedEvent){
  this.actoresSeleccionados.push(event.option.value);
  this.control.patchValue('');

}
eliminar(actor: actorAutoCompleteDTO){
  
}

}
