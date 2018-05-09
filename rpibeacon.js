var Bleacon = require('bleacon');

Bleacon.startScanning(); // scan for any bleacons

Bleacon.on('discover', function (bleacon) {
    // ...
    var currentdate = new Date();

    var datetime = "Last Sync: " + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    console.log("Found a beacon\n" + JSON.stringify(bleacon) + '\n'+ datetime);
});