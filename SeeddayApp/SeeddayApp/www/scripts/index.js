(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    function onDeviceReady() {
        document.addEventListener('pause', onPause, false);
        document.addEventListener('resume', onResume, false);
        var db = window.sqlitePlugin.openDatabase({ name: "seed.db" });
        db.executeSql("CREATE TABLE IF NOT EXISTS SEEDDAY (ID INTEGER PRIMARY KEY AUTOINCREMENT, GOAL TEXT, CURDATE TEST, DAY1 TEXT, DAY2 TEXT, DAY3 TEXT,PLANTNUMBER INTEGER, COMPLETE TEXT)");
        db.executeSql("SELECT *, MAX(ID) from seedday",[],function(res){
            if (res.rows.item(0).COMPLETE == "notcomplete") {
                location = "second.html";
                navigator.splashscreen.show();
            }
            else{
                navigator.splashscreen.show();
            }
        }); 
    };
    function onPause() { };
    function onResume() { };
})();