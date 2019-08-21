import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  configURL = 'assets/config.json';

  getData(): Observable<Employee> {
    return this.http.get<Employee>('http://localhost:3000/data');
  }
}
