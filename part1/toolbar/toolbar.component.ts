import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'; // etape 2 ajout des icons de base angular
import {MatButtonModule} from '@angular/material/button'; // etape 2 ajout des boutons de base angular
import {MatToolbarModule} from '@angular/material/toolbar'; // etape 2 ajout du module toolbar de base angular
import {Router} from "@angular/router"; // etape 4

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatIconModule,   // etape 2 import dans le component
    MatButtonModule,   // etape 2 import dans le component
    MatToolbarModule   // etape 2 import dans le component
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {  // tout ce qu'il y a dans cette class est pour l'étape 4

  constructor(
    private router: Router,  // etape 4
  ) {
  }

  navigateToPage1() {
    this.router.navigate(['/Page1']) // etape 4
  }

  navigateToPage2() {
    this.router.navigate(['/Page2']) // etape 4
  }

  navigateToPage3() {
    this.router.navigate(['/Page3']) // etape 4
  }

  navigateToPage4() {
    this.router.navigate(['/Page4']) // etape 4
  }

}
