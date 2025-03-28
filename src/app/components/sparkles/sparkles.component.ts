import { Component } from '@angular/core';

@Component({
  selector: 'app-sparkles',
  templateUrl: './sparkles.component.html',
  styleUrls: ['./sparkles.component.css']
})
export class SparklesComponent {
  sparks = Array(100).fill(0).map((_, i) => ({
    id: i,
    // Posiciones más aleatorias
    left: Math.random() * 100,
    top: Math.random() * 100,
    // Tamaños variados
    size: 3 + Math.random() * 10,
    // Retrasos escalonados
    delay: Math.random() * 2000,
    // Tipos de chispas (vela, bengala, estrella, etc.)
    type: ['candle', 'flare', 'star', 'glow'][Math.floor(Math.random() * 4)],
    // Colores dinámicos basados en el tipo
    color: this.getSparkColor(i),
    // Movimiento parabólico (simula gravedad)
    curveX: (Math.random() - 0.5) * 20,
    curveY: -50 - Math.random() * 30
  }));

  private getSparkColor(index: number): string {
    const colors = [
      '255, 215, 0',  // Dorado
      '255, 105, 180', // Rosa
      '255, 69, 0',    // Naranja
      '255, 255, 255', // Blanco
      '255, 0, 0'      // Rojo
    ];
    return colors[index % colors.length];
  }
}