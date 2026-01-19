var scorm = {
    connection: false,
    handle: null,

    init: function () {
        this.handle = this.getAPI();
        if (this.handle) {
            this.handle.LMSInitialize("");
            this.connection = true;
            console.log("SCORM API Found and Initialized");

            // Set initial status
            var status = this.handle.LMSGetValue("cmi.core.lesson_status");
            if (status == "not attempted") {
                this.handle.LMSSetValue("cmi.core.lesson_status", "incomplete");
                this.handle.LMSCommit("");
            }
        } else {
            console.warn("SCORM API Not Found");
        }
    },

    getAPI: function () {
        var theAPI = this.findAPI(window);
        if ((theAPI == null) && (window.parent != null) && (window.parent != window)) {
            theAPI = this.findAPI(window.parent);
        }
        if ((theAPI == null) && (window.top != null) && (window.top.opener != null)) {
            theAPI = this.findAPI(window.top.opener);
        }
        return theAPI;
    },

    findAPI: function (win) {
        var findAPITries = 0;
        while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
            findAPITries++;
            if (findAPITries > 7) {
                return null;
            }
            win = win.parent;
        }
        return win.API;
    },

    setScore: function (score, maxScore, minScore) {
        if (this.connection) {
            this.handle.LMSSetValue("cmi.core.score.raw", score);
            this.handle.LMSSetValue("cmi.core.score.max", maxScore !== undefined ? maxScore : "100");
            this.handle.LMSSetValue("cmi.core.score.min", minScore !== undefined ? minScore : "0");

            this.handle.LMSCommit("");
            console.log("SCORM Score Saved: " + score);
        }
    },

    complete: function (score) {
        if (this.connection) {
            if (score !== undefined) {
                this.setScore(score);
            }
            this.handle.LMSSetValue("cmi.core.lesson_status", "passed"); // or "completed"
            this.handle.LMSCommit("");
            this.handle.LMSFinish("");
            this.connection = false;
            console.log("SCORM Completed");
        }
    },

    exit: function () {
        if (this.connection) {
            this.handle.LMSFinish("");
            this.connection = false;
        }
    }
};

// Initialize on load
window.addEventListener('load', function () {
    scorm.init();
});

// Finish on unload
window.addEventListener('unload', function () {
    scorm.exit();
});
