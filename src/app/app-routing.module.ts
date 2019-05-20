import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent}, 
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'recipes', loadChildren: './recipes/recipe.module#RecipesModule'},
    {path: 'signup', component:SignupComponent},
    {path: 'signin', component:SigninComponent}
  ]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule{

}