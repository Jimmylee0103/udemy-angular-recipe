import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is a test description',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/11/WU2001_Cast-Iron-Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1536690646007.jpeg',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Milk', 2)
      ])
      ,
      new Recipe('A Test Recipe 2',
      'This is a test description 2',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/11/WU2001_Cast-Iron-Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1536690646007.jpeg',
      [
        new Ingredient('Juice', 2),
        new Ingredient('Pickles', 1)
      ])
    ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
