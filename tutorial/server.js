var ZShepherd = require('zigbee-shepherd');
var zserver = new ZShepherd('/dev/ttyACM0', { net: { panId: 0x7C71, channelList: [ 11 ] } });

zserver.on('ready', function () {
    console.log('Server is ready. Allow devices to join the network within 180 secs.');
    console.log('Waiting for incoming clients or messages...');
    zserver.permitJoin(0xff);
});

zserver.on('permitJoining', function (joinTimeLeft) {
    console.log(joinTimeLeft);
});

var osramLight,
    geLight,
    geLightStatus;

zserver.on('ind', function (msg) {
    switch (msg.type) {
        case 'devIncoming':
            console.log('Device: ' + msg.data + ' joining the network!');

            msg.endpoints.forEach(function (ep) {
                console.log(ep.dump());

                if (ep.devId === 544 && ep.clusters.has('genOnOff'))
                    osramLight = ep;
                else if (ep.devId === 257 && ep.clusters.has('genOnOff'))
                    geLight = ep;

                if (osramLight && geLight) {
                    setInterval(function () {
                        osramLight.functional('genOnOff', 'toggle', {}, function (err) {
                            if (err)
                                console.log(err);
                        });
                    }, 5000);
                }
            });
            break;

        case 'devChange':
            if (msg.endpoints[0].devId === 544) {
                geLightStatus = msg.data.data.onOff ? 'off' : 'on';
                geLight.functional('genOnOff', geStatus, {}, function (err) {
                    if (err)
                        console.log(err);
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
