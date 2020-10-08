import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { SpinnerService } from '../../services/spinner.service';
@Component({
  selector: 'app-listado-pokemones',
  templateUrl: './listado-pokemones.component.html',
  styleUrls: ['./listado-pokemones.component.scss']
})
export class ListadoPokemonesComponent implements OnInit {

  constructor(
    public data : DataService,
    public router:Router,
    public spinner : SpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.OpenDialog();
    this.data.ObtenerListaPokemones().subscribe((lista)=>{
      var listaJson = JSON.parse(JSON.stringify(lista));//Object --> JSON
      this.data.listaPokemones = listaJson.results;
      this.spinner.CloseDialog();
    });
  }

  VerDetalle(pokemon){
    this.data.pokemonElegidoURL = pokemon.url;
    this.router.navigateByUrl("detalle/"+pokemon.name);
  }

  ActualizarLista(limit)
  {
    this.spinner.OpenDialog();
    this.data.ObtenerListaPokemones(limit).subscribe((lista)=>{
      var listaJson = JSON.parse(JSON.stringify(lista));//Object --> JSON
      this.data.listaPokemones = listaJson.results;
      this.spinner.CloseDialog();
    });
    console.log("activado");
  }

}
