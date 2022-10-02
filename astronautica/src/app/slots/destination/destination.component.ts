import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  destination: string[] = [];

  @Output() selectedDestination: string = "";

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
    this.selectedDestination = event.previousContainer.data[event.previousIndex].split(".")[0];
    
  }
  /* event.preventDefault();
  let data = event.dataTransfer!.getData("text/plain");
  let el = document.getElementById(data) as HTMLDivElement;
  event.target!.appendChild(el);
  event.target.dataTransfer.data.appendChild(el);
  this.changeStyles(el);*/
}

}
