import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {

  entity: string[] = [];

  @Output() selectedEntity: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  showDragTip(event: DragEvent, type: string) {
    (document.getElementById("drag_tip_"+type)! as HTMLDivElement).style.visibility = "visible";
  }

  hideDragTip(type: string) {
    (document.getElementById("drag_tip_"+type)! as HTMLDivElement).style.visibility = "hidden";
  }

  allowDrag(event: Event, type: string) {
    event.preventDefault();
  }

  onItemDrop(event: CdkDragDrop<string[]>, type: string) {
    //this.hideDragTip(type);
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.selectedEntity = event.previousContainer.data[event.previousIndex].split(".")[0];
    }
  }
}
