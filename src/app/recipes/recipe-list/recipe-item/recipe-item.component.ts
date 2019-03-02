import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // @Output() selectedRecipe = new EventEmitter<void>();

  @Input() recipe: Recipe;

  constructor(private recipeSerive: RecipeService) { }

  ngOnInit() {
  }

  onSelectRecipeItem(){
    this.recipeSerive.selectedRecipe.emit(this.recipe);
  }
}
