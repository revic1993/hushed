import { HushItem } from "../structs/hush-item";
import { StorageService } from "./storage.service";
import { TabService } from "./tabs.service";

export const onInstalled = () => {
    console.log(`onInstalled called`);
    chrome.webNavigation.onCompleted.addListener(onWebNavCompleted);
}

export const onWebNavCompleted =  async () => {
    console.log(`onWebNavCompleted called`);
    let storage : StorageService<HushItem> = new StorageService();
    let tab = await TabService.getCurrentTab();
    console.log(tab);    
}