import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dataReceived = false;

  result = {
    message: 'Waiting for results',
    data: {}
  };

  constructor(private service: AppService) {}

  ngOnInit() {
    console.log('scaffold');
  }

  showData(): any {
    this.service.getData().subscribe((data) => {
      console.log('results!!!!', data);
      this.result = data;
      this.dataReceived = true;
    },
    (error) => { console.log(error); });
  }
}
