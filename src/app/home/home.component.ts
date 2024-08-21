import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}


//TUPLAS

const myTupla: [number, string] = [1, 'Hola Mundo'];

//ENUM
//constantes almacenadas en un obj
enum Volumen{
  min = 0,
  medium = 50,
  max = 100,
}
const volumenActual: Volumen = Volumen.medium;

//Any
//una variable puede ser cualquier cosa, preferentemente evitarlo

let cualquierCosa : any;

//VOID
function saludar(): void{
  console.log('Hola Mundo')
}