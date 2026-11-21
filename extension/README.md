# Inspector Studio Companion (Manifest V3)

A user-triggered companion extension for Chromium-based browsers. It adds active-tab DOM inspection, link/image/form inventory, page resource timing capture, CSS overrides, selector-based text changes and element removal.

## Install
1. Open the browser extension management page.
2. Enable developer mode.
3. Choose Load unpacked and select this extension directory.
4. Pin the extension, open a page you own or are authorized to test, and click the extension.

## Permission model
The extension uses activeTab, scripting, storage and tabs. It does not request cookies, webRequest, debugger, or all-sites host permissions. It cannot read HttpOnly cookies, browser passwords, or other tabs' private session state. Actions target only the active tab after a direct user click.

## Browser support
Requires a Chromium browser supporting Manifest V3 and the scripting API. Some Android browsers do not support installing unpacked extensions; in that case use the Inspector Studio web app's built-in tools.

## Security
CSS/DOM changes are temporary page modifications. They do not alter the remote server and disappear on reload. Do not use against sites without authorization.