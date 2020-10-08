import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  listaPokemones:any;
  pokemonElegidoURL:any;
  pokemonInfo;
  galeriaImagenes = [];
  constructor(
    public http : HttpClient
  ) { }

  ObtenerListaPokemones(limit=20){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit='+limit);
  }

  ObtenerInfoPokemon()
  {
    return this.http.get(this.pokemonElegidoURL);
  }

  ObtenerInfoHabilidad(url)
  {
    return this.http.get(url);
  }
}
