import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is a test description',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/11/WU2001_Cast-Iron-Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1536690646007.jpeg')
      ,
      new Recipe('A Test Recipe 2',
      'This is a test description 2',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/11/WU2001_Cast-Iron-Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1536690646007.jpeg')];


  getRecipes(){
    return this.recipes.slice();
  }
}
