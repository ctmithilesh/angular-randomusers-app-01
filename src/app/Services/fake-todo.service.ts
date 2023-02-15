import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeTodoService {

  // inject HTTPclient in the constructor 
  constructor(private http: HttpClient) { 
  }

  // a method that calls the service
  getFakeTodos(){
      return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1')

  }


}
