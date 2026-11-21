chrome.runtime.onInstalled.addListener(()=>chrome.storage.local.set({inspectorCompanionInstalledAt:Date.now()}));
chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
 if(message?.type==="PING"){sendResponse({ok:true,version:chrome.runtime.getManifest().version});return}
 if(message?.type==="ACTIVE_TAB"){chrome.tabs.query({active:true,lastFocusedWindow:true}).then(t=>sendResponse({ok:true,tab:t[0]||null}));return true}
});