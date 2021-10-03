import { Component } from '@angular/core';
import { HushItem } from './structs/hush-item';

@Component({
  selector: 'hushed',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public hushItem : HushItem = {
    isHushed : false,
    siteName : "youtube.com",
    favIcon :"https://music.youtube.com/img/favicon_32.png"
  };
}
