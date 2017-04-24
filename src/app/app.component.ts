import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  caracteristicaCargada = 'receta';

  onNavigate(caracteristica: string) {
    this.caracteristicaCargada = caracteristica;
  }
}
