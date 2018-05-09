var Bleacon = require('bleacon');

Bleacon.startScanning(); // scan for any bleacons

Bleacon.on('discover', function (bleacon) {
    // ...
    var currentdate = new Date();

    const exec = require( 'child_process' ).exec;
    const rpiSerial;
    exec('cat /proc/cpuinfo | grep Serial',(error,stdout,stderr) => {
        if(error){
            console.error( `exec error: ${error}` );
            return;
        }
        rpiSerial = `stdout: ${stdout}`;// this is your RPI serial number
        console.log( `stderr: ${stderr}` );
    });

    var datetime = "Last Sync: " + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    console.log('Found a beacon\n' + rpiSerial + '\n' + JSON.stringify(bleacon) + '\n'+ datetime);
});