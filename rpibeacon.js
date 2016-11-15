var Bleacon = require('bleacon');

Bleacon.startScanning(); // scan for any bleacons

Bleacon.on('discover', function(bleacon) {
    // ...
    console.log("Found a beacon " + JSON.stringify(bleacon));
});