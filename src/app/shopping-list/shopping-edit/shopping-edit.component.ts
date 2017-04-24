import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styles: []
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')  nameInputRef: ElementRef;
  @ViewChild('cantidadInput')  cantidadInputRef: ElementRef;
  @Output() ingredienteAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingCantidad = this.cantidadInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingCantidad);
    this.ingredienteAdded.emit(newIngredient);
  }
}
