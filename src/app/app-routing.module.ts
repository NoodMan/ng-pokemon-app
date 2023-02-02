import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EvoPokemonComponent } from './evo-pokemon/evo-pokemon.component';

const routes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent},
  { path: 'pokemon/:id', component: DetailPokemonComponent},
  { path: 'pokemon/:id/evo', component: EvoPokemonComponent},
  { path:'', redirectTo: 'pokemons', pathMatch:'full'},
  //toujours le declarer en dernier car ** lis toutes les routes!! 
  { path:'**', component: PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
