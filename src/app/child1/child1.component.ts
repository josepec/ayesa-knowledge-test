import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { ComunicacionService } from '../service/comunication.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  @Input() fatherMsg: string = ''; // Esta propiedad recibirá el valor desde el componente padre

  constructor(private comunicacionService: ComunicacionService) { }

  enviarMensaje() {
    const mensaje = 'Hola hermano';
    this.comunicacionService.enviarMensaje(mensaje);
  }
}
