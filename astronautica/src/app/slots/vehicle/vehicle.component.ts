import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicle: string[] = [];

  @Output() selectedVehicle: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  showDragTip(type: string) {
    (document.getElementById("drag_tip_"+type)! as HTMLDivElement).style.visibility = "visible";
  }

  hideDragTip(type: string) {
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
      this.selectedVehicle = event.previousContainer.data[event.previousIndex].split(".")[0];
    }
  }

}
