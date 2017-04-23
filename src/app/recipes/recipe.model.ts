export class Recipe{
  public nombre: string;
  public descripcion: string;
  public imagePath: string;

  constructor( name: string, descripcion: string, imagePath: string ) {
    this.nombre = name;
    this.descripcion = descripcion;
    this.imagePath = imagePath;
  }
}
