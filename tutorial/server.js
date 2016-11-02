var ZShepherd = require('zigbee-shepherd');
var zserver = new ZShepherd('/dev/ttyACM0');

zserver.on('ready', function () {
    console.log('Server is ready. Allow devices to join the network within 180 secs.');
    console.log('Waiting for incoming clients or messages...');
    zserver.permitJoin(180);
});

zserver.on('permitJoining', function (joinTimeLeft) {
    console.log(joinTimeLeft);
});

zserver.start(function (err) {
    if (err)
        console.log(err);
});
