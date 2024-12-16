import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  private mensajeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get mensaje$() {
    return this.mensajeSubject.asObservable();
  }

  enviarMensaje(mensaje: string) {
    this.mensajeSubject.next(mensaje);
  }
}
