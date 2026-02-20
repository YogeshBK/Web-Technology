// Global variable to track current mode
let currentMode = "";

// Set a cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
}

// Get a cookie value
function getCookie(name) {
    const cname = name + "=";
    const decoded = decodeURIComponent(document.cookie);
    const parts = decoded.split(';');
    for (let c of parts) {
        c = c.trim();
        if (c.indexOf(cname) === 0) return c.substring(cname.length);
    }
    return "";
}

// Apply the mode
function applyMode(mode) {
    if(mode === "dark") {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    }
}

// Toggle mode
function toggleMode() {
    // Toggle the variable
    currentMode = (currentMode === "dark") ? "light" : "dark";

    // Apply immediately
    applyMode(currentMode);

    // Save to cookie
    setCookie("mode", currentMode, 7);
}

// On page load
window.onload = function() {
    // Get saved mode from cookie
    currentMode = getCookie("mode") || "light";

    // Apply mode
    applyMode(currentMode);
}