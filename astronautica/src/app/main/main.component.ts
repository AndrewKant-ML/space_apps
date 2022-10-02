import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  text: string = '';

  entities = ["bacteria.png", "astro_ant.png", "fly.png", "ant.png", "fish.png"];
  vehicles = ["vehicle_1.png", "ufo.png"];
  destinations = ["iss.png", "moon.png", "mars.png"];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(event: any) {
    /* this.text = event.target!.id;
    event.dataTransfer!.setData("text/plain", event.target!.id); */
  }

  

}
