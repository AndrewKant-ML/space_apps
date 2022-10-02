import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  text: string = '';

  entities = ["bacteria", "human", "animal"];
  vehicles = ["vehicle_1.png"];
  destinations = ["planet 1", "planet 2", "planet 3"];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(event: any) {
    this.text = event.target!.id;
    event.dataTransfer!.setData("text/plain", event.target!.id);
  }

}
