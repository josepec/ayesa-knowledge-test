import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [MatCardModule, Child1Component, Child2Component, MatButtonModule],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent {
  fatherMsg: string = '';

  send() {
    this.fatherMsg = 'Hola hijo';
  }
}
