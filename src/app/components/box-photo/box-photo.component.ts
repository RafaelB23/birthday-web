import { Component, Input } from '@angular/core';
import { SparklesComponent } from '../sparkles/sparkles.component';

@Component({
  selector: 'app-box-photo',
  imports: [SparklesComponent],
  templateUrl: './box-photo.component.html',
  styleUrl: './box-photo.component.css'
})
export class BoxPhotoComponent {
  items = [
    {id:0, src:'imgs/MoonBirthday/1.ninaClinica.jpg', alt:'La princesa', content:'Una etapa de la vida donde se comenzo a vivir muy intesno.'},
    {id:1, src:'imgs/MoonBirthday/2.lenguitaTierna.jpg', alt:'La niña tierna', content:'Esos ojos que te transportan a otro mundo.'},
    {id:2, src:'imgs/MoonBirthday/3.boquitaChocolate.gif', alt:'La mas comelona', content:'Gracias por dejar que tu niña interior se divirtiera este año'},
    {id:3, src:'imgs/MoonBirthday/7.sonrisaLentes.jpg', alt:'La sonrisa de mi día', content:'Sigue sonriendo que tu sonrisa sigue siendo la luz de mi vida.'},
    {id:4, src:'imgs/MoonBirthday/8.lavaGirl.jpg', alt:'Lava-girl', content:'Muchos ciclos de la vida, pero solo uno de amor.'},
    {id:5, src:'imgs/MoonBirthday/91.ellaBonita.jpg', alt:'La más sexy de todo el lugar', content:'Cada que sonreías, el mundo se detenia.'},
    {id:6, src:'imgs/MoonBirthday/ninaBerrinche.jpeg', alt:'Haciendo berrinche', content:'Nunca olvides que despues de la tormenta, siempre sale el sol.'},
    {id:7, src:'imgs/MoonBirthday/v2.ninaConcentrada.gif', alt:'Concentración maxima', content:'No dejes de ponerte objetivos y no te rindas hasta que tengas lo que quieres.'},
    {id:8, src:'imgs/MoonBirthday/v6.camaritaFeliz.gif', alt:'Muchos hermosos recuerdos', content:'Sigue tomando fotos, que cada una de ellas es un recuerdo que no se olvida.'},
    {id:9, src:'imgs/MoonBirthday/v4.bizcosLengüita.gif', alt:'Mi favorita ✨', content:'Sigue siendo feliz, que tu felicidad es la mia.'}
  ]

  message = 
  '¡Feliz cumpleaños! 🎉🎂🎈🎁🎊🥳\n\n\nContigo pase un año lleno de aventuras, pasamos altas y bajas pero desafortunadamente no pudimos afrontar todas, apesar de eso siempre te deseare que te pase lo mejor.\n\nTe deseo un día lleno de amor, felicidad y muchas bendiciones. Que todos tus deseos se hagan realidad y que este nuevo año de vida esté lleno de momentos inolvidables.\n\n\n¡Te quiero mucho! ❤️';
  letter = 
  'Si todo salio bien y sales ahora de tu casa tu regalo te va a estar esperando...\n\n\nLa forma más literal de darte la parte de mi corazón que te quedaras';
  
  @Input() reverseOrder: boolean = false;
}
