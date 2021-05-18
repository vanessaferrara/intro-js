alert("You are on Facebook! Do not panic, we got you covered.");


// Message passing ref:
// https://developer.chrome.com/docs/extensions/mv3/messaging/
function updateBadge(n) {
    chrome.runtime.sendMessage({ hidden: n });
}

// TODO: fill-in this file.