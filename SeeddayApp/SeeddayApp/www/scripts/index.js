(function () {
    "use strict";
    /*
    if (localStorage.getItem('goal') != null) {
        location = "second.html";
    }
    */
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    function onDeviceReady() {
        /*
        window.sqlitePlugin.openDatabase({ name: "seed.db" }, function (db) {
            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS seedday (id integer primary key, goal text, curDate text, Day1 text, Day2 text, Day3 text)');
            });
        });
        */
        var db = window.sqlitePlugin.openDatabase({ name: "seed.db" });
        db.executeSql("CREATE TABLE SEEDDAY (ID INTEGER PRIMARY KEY AUTOINCREMENT, GOAL TEXT, CURDATE TEST, DAY1 TEXT, DAY2 TEXT, DAY3 TEXT,PLANTNUMBER INTEGER)");
        navigator.splashscreen.show();
        document.addEventListener('pause', onPause, false);
        document.addEventListener('resume', onResume, false);
        
    };
    function onPause() { };
    function onResume() { };
})();