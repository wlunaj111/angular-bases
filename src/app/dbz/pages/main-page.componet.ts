import { Component } from '@angular/core';
import { DBZService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  constructor(private dbzService: DBZService){ }

  get characters(): Character[]{
    // return this.dbzService.characters;
    // se le hace una copia a estos datos
    return [...this.dbzService.characters];
  }
  onDeleteCharacter(id: string): void{
    this.dbzService.deleteCharactyerById(id)
  }
  onNewCharacter (character: Character): void {
    this.dbzService.addCharacter(character);
  }

}
