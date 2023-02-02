import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';
//ng generate component evo-pokemon --inline-template=false
@Component({
  selector: 'app-evo-pokemon',
  templateUrl: './evo-pokemon.component.html',
 
})
export class EvoPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.pokemonList = POKEMONS; 
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if(pokemonId){
      this.pokemon = this.pokemonList.find(pokemon=>pokemon.id == +pokemonId)
    }
  }
  goToPokemonList() {
    this.router.navigate(['/pokemons'])
  }
  
  lookEvoPokemon(){
    this.router.navigate(['pokemon/id/evo'])
  }
}
