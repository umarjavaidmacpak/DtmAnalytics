import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'group-drop-down',
  template: `<kendo-dropdownlist [data]="data"
      [filterable]="true"
      (valueChange)="valueChange($event)"
      (selectionChange)="selectionChange($event)"
      (filterChange)="filterChange($event)"
      (open)="open()"
      (close)="close()"
      (focus)="focus()"
      (blur)="blur()"
    >
    </kendo-dropdownlist>
    <event-log title="Event log" [events]="events">
    </event-log>` 
})
export class GroupDropDownComponent implements OnInit {
    private source = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan'];
    private data: string[];

    constructor() {
        this.data = this.source.slice();
        this.data.slice
    }
    ngOnInit() {

    }

}



//export class AppComponent {
//    public source: Array<string> = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan'];
//    public data: Array<string>;

//    constructor() {
//        this.data = this.source.slice();
//    }

//}
