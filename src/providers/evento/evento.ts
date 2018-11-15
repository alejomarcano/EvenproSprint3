import { Platform } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the EventoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventoProvider {

  email: any;
  
  private cart = [];
  constructor(public http: HttpClient,
              private storage: Storage,
              private platform: Platform) {
                this.platform.ready().then(()=>{
                  this.getEmail();
                });
  }

  //a partir del email del localstorage, devolver el usuario
  getUserData(): Observable<any>{
      this.getEmail();

      return this.http
      .get(`http://localhost:3000/api/home/${this.email}`);
  }
  //Retorna los eventos a los cuales el usuario a dicho que asistira
  getCart(){
    return this.cart;
  }
  //Permite al usuario agregar un evento a la pestana de eventos a los que asistira
  addProduct(product){
    this.cart.push(product);
  }
  //retorna el email que se guarda en el localstorage para 
  //saber quien crea el evento
  getEmail(){
    this.storage.get('useremail').then(value =>{
        this.email = value;
    });
  }

  createEvento(nombre, ubicacion, fecha, hora, descripcion, categoria, userId?): Observable<any>{
    return this.http
    .post('http://localhost:3000/api/evento/create',{
        nombre,
        ubicacion,
        fecha,
        hora,
        descripcion,
        categoria,
        userId
    });
  }

  getEventos(): Observable<any>{
    return this.http
      .get('http://localhost:3000/api/eventos/all');
  }

  addComentario(eventoId, duracion, horario, aporte, review, userId): Observable<any>{
    return this.http
    .post('http://localhost:3000/api/evento/comentario',{
        eventoId,
        duracion,
        horario,
        aporte,
        review,
        userId
    });
  }

  searchEvento(evento):  Observable<any>{
    return this.http
    .post('http://localhost:3000/api/search-evento',{
      evento: evento
     
  });

  

  }

  getMejores(): Observable<any>{
    return this.http
      .get('http://localhost:3000/api/eventos/mejores');
  }

 

}
