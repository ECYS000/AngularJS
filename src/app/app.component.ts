import { Component } from '@angular/core';

// Isso é um componente
@Component({

  //o nome que iremos chamar para mostrar esse componente
  selector: 'app-root',

  // Aqui está o caminho do nosso HTML
  templateUrl: './app.component.html',

  // Aqui está o caminho CSS de estilo
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'serasa-transformese';

  // Aqui dentro
}
