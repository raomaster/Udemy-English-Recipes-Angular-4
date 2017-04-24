import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Manzanas', 5),
    new Ingredient('Tomate', 5),
    new Ingredient('platano', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

}
