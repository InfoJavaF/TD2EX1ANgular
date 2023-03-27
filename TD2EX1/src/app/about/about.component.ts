import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  titre:string = 'TD1Ex2';

  imageUrl:string = "https://www.intiformation.com/wp-content/uploads/2021/05/ezgif-2-2cdc70725914.gif";

  nomClasse:string = "texte";
}
