import { Component, Input, OnInit } from '@angular/core';
import { HushItem } from '../structs/hush-item';

@Component({
  selector: 'hushed-item',
  templateUrl: './hushed-item.component.html',
  styleUrls: ['./hushed-item.component.scss']
})
export class HushedItemComponent implements OnInit {
  @Input("hushItem") public hushItem : HushItem | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
