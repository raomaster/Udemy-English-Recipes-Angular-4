import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent {
  @Output() caracteristicaSeleccionada = new EventEmitter<string>();

  constructor() {
  }

  onSelect(caracteristica: string) {
    this.caracteristicaSeleccionada.emit(caracteristica);
  }
}
