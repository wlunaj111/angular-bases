import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroesName: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor']
  removedHero?: string;

  removeLastHeroe = (): void => {
   this.removedHero = this.heroesName.pop();
  }

}


