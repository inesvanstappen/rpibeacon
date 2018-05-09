var Bleacon = require('bleacon');
var PiInfo = require('piinfo');

Bleacon.startScanning(); // scan for any bleacons

Bleacon.on('discover', function (bleacon) {
    // ...
    var currentdate = new Date();
    var serialNumber = PiInfo.serial();

    var datetime = "Last Sync: " + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    console.log('\n\nFound a beacon\n'  + JSON.stringify(bleacon) + '\n'+ datetime);
});