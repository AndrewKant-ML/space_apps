import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addItem(event: any) {
    this.text = event.target!.id;
    event.dataTransfer!.setData("text/plain", event.target!.id);
  }

}
