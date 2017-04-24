import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Una receta de ejemplo', 'This is a simple test',
    'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
        new Recipe('Segunda receta de ejemplo', 'This is a simple test',
    'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
