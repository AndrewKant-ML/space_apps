import { Component, OnInit, Input } from '@angular/core';
import { moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { relative } from 'path';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() text = 'hero';

  constructor() { }

  ngOnInit() {
  }

  private changeStyles(el: HTMLDivElement) {
    el.style.position = "relative";
    switch(el.classList.item(0)) {
      case "entity":

        break;
      case "vehicle":
        break;
      case "destination":
        break;
    }
  }

  showDragTip(event: DragEvent) {
    console.log(event);
    if ((event.target as HTMLDivElement)!.id == "map_container")
      (document.getElementById("drag_tip")! as HTMLDivElement).style.visibility = "visible";
  }

  hideDragTip(event: Event) {
    if ((event.target as HTMLDivElement)!.id == "map_container")
      (document.getElementById("drag_tip")! as HTMLDivElement).style.visibility = "hidden";
  }

  allowDrag(event: Event) {
    event.preventDefault();
  }

  onItemDrop(event: any) {
    event.preventDefault();
    let data = event.dataTransfer!.getData("text/plain");
    let el = document.getElementById(data) as HTMLDivElement;
    event.target!.appendChild(el);
    this.changeStyles(el);
    this.hideDragTip(event);
  }

  showInfo() {
    
  }

}
