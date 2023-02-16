import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetallusersService {

  constructor(private http: HttpClient) { }

  fetchAllUsers(){
    this.http.get<any>('https://reqres.in/api/users?page=2')
  }

}
