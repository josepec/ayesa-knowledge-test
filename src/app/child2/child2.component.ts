import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { Subscription } from 'rxjs';
import { ComunicacionService } from '../service/comunication.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  @Input() fatherMsg: string = ''; // Esta propiedad recibirá el valor desde el componente padre

  brotherMsg: string = '';
  private subscription: Subscription | undefined;

  constructor(private comunicacionService: ComunicacionService) { }

  ngOnInit() {
    this.subscription = this.comunicacionService.mensaje$.subscribe(mensaje => {
      this.brotherMsg = mensaje;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
