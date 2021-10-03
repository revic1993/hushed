import { Component, Input, OnInit } from '@angular/core';
import { HushItem } from '../structs/hush-item';

@Component({
  selector: 'hushed-item',
  templateUrl: './hushed-item.component.html',
  styleUrls: ['./hushed-item.component.scss']
})
export class HushedItemComponent implements OnInit {
  @Input("isIncognito") public isIncognito : boolean = false;
  @Input("hushItem") public hushItem : HushItem | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  public getHushItemImg() : string {
    if(this.isIncognito){
      return this.hushItem?.isHushed ? "../../assets/mute-incognito.svg" : "../../assets/unmute-incognito.svg";
    }
    return this.hushItem?.isHushed ? "../../assets/mute.svg" : "../../assets/unmute.svg";
  }
}
