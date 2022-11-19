import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
 
  public heroeBorrado: string = '';

  borrarHeroe(){
    //this.heroes.shift();//borra el primer elemento del array y lo devuelve
    this.heroeBorrado = this.heroes.shift() || '';
    //console.log('Borrando a: ' + heroeBorrado);
  }
}
