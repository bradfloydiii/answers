import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  configURL = 'assets/config.json';

  getData(): any {
    return this.http.get('http://localhost:3000/data');
  }
}
