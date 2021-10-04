
export class TabService{
    public static async getCurrentTab() : Promise<any>{
        let queryOptions = { active: true, currentWindow: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        return tab;
      }
}