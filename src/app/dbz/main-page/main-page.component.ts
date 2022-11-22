
import { Component, Input } from '@angular/core';

import { DbzService } from '../services/dbz.services';
import { Personaje } from './../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'

})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 7500

  }


  constructor() { }

}
