import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-mostrar-detalles',
  templateUrl: './mostrar-detalles.component.html',
  styleUrls: ['./mostrar-detalles.component.scss']
})
export class MostrarDetallesComponent implements OnInit {

  pokemon:any = {name:""};
  galeriaImagenes = [];
  constructor(
    public data:DataService,
    public spinner: SpinnerService
  ) { }

  ngOnInit(): void {
    
    this.MostrarDetalles();
  }

  MostrarDetalles()
  {
    this.spinner.OpenDialog();
    this.data.ObtenerInfoPokemon().subscribe((info)=>{ 
      var infoJson = JSON.parse(JSON.stringify(info));
      var arrayInfoHabilidades = [];
      infoJson.abilities.forEach(e => {
        this.data.ObtenerInfoHabilidad(e.ability.url).subscribe((r)=>{
          arrayInfoHabilidades.push(r);
        })
      });

      this.galeriaImagenes.push(infoJson.sprites["back_default"]);
      this.galeriaImagenes.push(infoJson.sprites["back_shiny"]);
      this.galeriaImagenes.push(infoJson.sprites["front_default"]);
      this.galeriaImagenes.push(infoJson.sprites["front_shiny"]);
      this.pokemon = infoJson;
      this.pokemon.detallesHabilidades = arrayInfoHabilidades;

      this.spinner.CloseDialog();
    })
  }

}
