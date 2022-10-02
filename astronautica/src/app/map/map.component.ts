import { Component, OnInit, Input } from '@angular/core';
import { moveItemInArray, copyArrayItem, CdkDropListGroup, CdkDragDrop } from '@angular/cdk/drag-drop';
import { relative } from 'path';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


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

  showDragTip(event: DragEvent, type: string) {
      (document.getElementById("drag_tip_"+type)! as HTMLDivElement).style.visibility = "visible";
  }

  hideDragTip(type: string) {
    console.log("drag_tip_"+type);
      (document.getElementById("drag_tip_"+type)! as HTMLDivElement).style.visibility = "hidden";
  }

  allowDrag(event: Event, type: string) {
    event.preventDefault();
  }

  onItemDrop(event: CdkDragDrop<string[]>, type: string) {
    this.hideDragTip(type);
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    /* event.preventDefault();
    let data = event.dataTransfer!.getData("text/plain");
    let el = document.getElementById(data) as HTMLDivElement;
    event.target!.appendChild(el);
    event.target.dataTransfer.data.appendChild(el);
    this.changeStyles(el);*/
  }

  showInfo() {
    
  }

}
