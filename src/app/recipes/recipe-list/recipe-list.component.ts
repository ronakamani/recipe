import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipes : Recipe[] = [
     new Recipe('Test','Test description','http://www.tasty-indian-recipes.com/wp-content/uploads/2015/03/Veg-Schezwan-Fried-Rice-Recipe.jpg')
   ];
  constructor() { }

  ngOnInit() {
  }

}
