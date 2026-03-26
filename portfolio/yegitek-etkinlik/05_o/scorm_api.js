// SCORM 1.2 API Wrapper
var scormAPI = null;

function findSCORMAPI(win) {
    var findAttempts = 0;
    var maxAttempts = 500;
    while ((!win.API) && (win.parent) && (win.parent != win)) {
        findAttempts++;
        if (findAttempts > maxAttempts) return null;
        win = win.parent;
    }
    return win.API || null;
}

function getAPI() {
    if (scormAPI) return scormAPI;
    scormAPI = findSCORMAPI(window);
    if (!scormAPI && window.opener) {
        scormAPI = findSCORMAPI(window.opener);
    }
    return scormAPI;
}

function scormInit() {
    var api = getAPI();
    if (api) {
        api.LMSInitialize("");
        api.LMSSetValue("cmi.core.lesson_status", "completed");
        api.LMSSetValue("cmi.core.score.raw", "100");
        api.LMSSetValue("cmi.core.score.min", "0");
        api.LMSSetValue("cmi.core.score.max", "100");
        api.LMSCommit("");
        console.log("SCORM: Initialized and set to Completed");
    } else {
        console.warn("SCORM API not found - running in standalone mode");
    }
}

function scormFinish() {
    var api = getAPI();
    if (api) {
        api.LMSFinish("");
        console.log("SCORM: Finished");
    }
}

// Auto-initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scormInit);
} else {
    scormInit();
}

// Auto-finish on unload
window.addEventListener('beforeunload', scormFinish);
