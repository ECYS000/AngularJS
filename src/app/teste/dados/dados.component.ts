import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent {

  nome: String = "Serasa";
  sobrenome: String = "WiseHands";

  linkSite: String = "https://www.serasa.com.br/"
  linkImagem: String = "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"

  contador: number = 0;

  

  adicionaUm() {
    this.contador++;
  }

  menosUm() {
    this.contador--;
  }

  zerar(){
    this.contador = 0;
  }

  teclar(event: any){

    console.log (event.target.value)

    this.nome = event.target.value

  }

}
