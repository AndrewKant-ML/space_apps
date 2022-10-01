import { Component, OnInit, Input } from '@angular/core';

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
    var data = event.dataTransfer!.getData("text/plain");
    event.target!.appendChild(document.getElementById(data));
    this.hideDragTip(event);
  }

}
