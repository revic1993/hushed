import { Component } from '@angular/core';
import { HushItem } from './structs/hush-item';

@Component({
  selector: 'hushed',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentSite : HushItem = {
    isHushed : false,
    siteName : "youtube.com",
    favIcon :"https://music.youtube.com/img/favicon_32.png"
  };
  public hushedItems : HushItem[] = [
    {
      isHushed : true,
      siteName : "youtube.com",
      favIcon :"https://music.youtube.com/img/favicon_32.png"
    },
    {
      isHushed : true,
      siteName : "youtube.com",
      favIcon :"https://music.youtube.com/img/favicon_32.png"
    },
    {
      isHushed : true,
      siteName : "youtube.com",
      favIcon :"https://music.youtube.com/img/favicon_32.png"
    },
    {
      isHushed : true,
      siteName : "youtube.com",
      favIcon :"https://music.youtube.com/img/favicon_32.png"
    }
  ];
  public incognitoItem : HushItem = {
    isHushed : false,
    siteName : "Incognito Tabs",
    favIcon :"../assets/incognito.png"
  }
}
