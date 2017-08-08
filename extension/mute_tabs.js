"use strict";

function assert(condition, message) {
	if (!condition) {
		throw message || "Assertion failed";
	}
}

function isTabInNormalWindow(tab) {
	const windowId = tab.windowId;
	assert(Number.isInteger(windowId));
	return windowIdToType[windowId] === "normal";
}

function muteTab(tab) {
	if (isTabInNormalWindow(tab)) {
		chrome.tabs.update(tab.id, {muted: true});
	}
}

function handleNewTab(tab) {
	const tabId = tab.id;
	const toMute = tab.incognito;
	tabIdToTab[tabId] = tab;
	if (toMute)
		muteTab(tab);
}

function handleCloseTab(tabId) {
	delete tabIdToTab[tabId];
}

function handleNewWindow(window) {
	windowIdToType[window.id] = window.type;
}

function handleCloseWindow(windowId) {
	delete windowIdToType[windowId];
}

function getAllWindows() {
	return new Promise(function (resolve) {
		chrome.windows.getAll(resolve);
	});
}

const tabIdToTab = Object.create(null);
const windowIdToType = Object.create(null);

chrome.extension.isAllowedIncognitoAccess(async function (allowed) {
	if (!allowed) {
		alert("No access to incognito mode. Please enable under extension settings.");
		return
	}

	chrome.windows.onCreated.addListener(handleNewWindow);
	chrome.windows.onRemoved.addListener(handleCloseWindow);

	const windows = await getAllWindows();
	for (const window of windows) {
		handleNewWindow(window);
	}

	chrome.tabs.onCreated.addListener(tab => handleNewTab(tab));
	chrome.tabs.onRemoved.addListener(handleCloseTab);
});