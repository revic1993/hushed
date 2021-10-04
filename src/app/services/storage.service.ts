import { StorageKeys } from "../structs/storage-keys.enum";

export class StorageService<T>{

    public getItemArr(key : StorageKeys) : Promise<T[]>{
        return new Promise((resolve, reject) => {            
            chrome.storage.sync.get(key, (items ) => {              
              if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
              }              
              resolve(items as T[]);
            });
        });
    }

    public getItem(key : StorageKeys) : Promise<T>{
        return new Promise((resolve, reject) => {            
            chrome.storage.sync.get(key, (items ) => {              
              if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
              }              
              resolve(items as T);
            });
        });
    }

    public setItemArr(key : StorageKeys,items : T[]){
        chrome.storage.sync.set({[key] : items});
    }

    public setItem(key : StorageKeys,item : T){
        chrome.storage.sync.set({[key] : item});
    }
}