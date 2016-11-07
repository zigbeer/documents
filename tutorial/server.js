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

var geBulb,
    osramBulb,
    geBulbStatus,
    osramBulbStatus;

zserver.on('ind', function (msg) {
    switch (msg.type) {
        case 'devIncoming':
            console.log('Device: ' + msg.data + ' joining the network!');

            msg.endpoints.forEach(function (ep) {
                console.log(ep.dump());

                if (ep.devId === 544 && ep.clusters.has('genOnOff'))
                    osramBulb = ep;
                else if (ep.devId === 257 && ep.clusters.has('genOnOff'))
                    geBulb = ep;

                if (osramBulb && geBulb) {
                    setInterval(function () {
                        geBulb.functional('genOnOff', 'toggle', {}, function (err) {
                            if (!err)
                                console.log('GE BULB TOGGLE!');
                        });
                    }, 5000);
                }
            });
            break;

        case 'devChange':
            if (msg.endpoints[0].devId === 257) {
                geBulbStatus = msg.data.data.onOff;
                osramBulbStatus = !geBulbStatus ? 'on' : 'off';
                osramBulb.functional('genOnOff', osramBulbStatus, {}, function (err) {
                    if (!err)
                        console.log('OSRAM BULB ' + osramBulbStatus.toUpperCase() + '!');
                });
            }
            break;

        default:
            // Not deal with other msg.type in this example
            break;
    }
});

zserver.start(function (err) {
    if (err)
        console.log(err);
});
