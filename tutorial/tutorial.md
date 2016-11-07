# Tutorial
  
This tutorial will show you how to build a ZigBee IoT network with [`zigbee-shepherd`](https://github.com/zigbeer/zigbee-shepherd#readme). Let's control your ZigBee devices and do something fun!  

## Section A: How to use zigbee-shepherd

### 1. Prepare your hardware

* Use CC2530 or CC2531 as the Coordinator.  

    * **SmartRF05EB + CC2530EM**  
![CC2530 DK](https://cloud.githubusercontent.com/assets/14177449/19920549/5fb77b48-a114-11e6-8c89-412de0cf9d61.png)

    * **CC2531 USB Dongle**  
![CC2531 USB Dongle](https://cloud.githubusercontent.com/assets/14177449/19920475/c7e6ea92-a113-11e6-9736-31a4f44651a7.png)

* Connect your CC2530 or CC2531 to your PC  

![Connect to PC](https://cloud.githubusercontent.com/assets/14177449/19920601/b0b3a60c-a114-11e6-878e-e1f478a8d25b.png)

* Programming the SoC with ZNP image file  

    * **Downloads:**
        * [TI SmartRF Flash Programmer : FLASH-PROGRAMMER](http://www.ti.com/tool/flash-programmer)  
        * [CC2530ZNP.hex](https://github.com/zigbeer/documents/blob/master/zigbee-shepherd/CC2530ZNP-Test.rar)  
        * [CC2531ZNP.hex](https://github.com/zigbeer/documents/blob/master/zigbee-shepherd/CC2531ZNP-Test.rar)  

![Programmer](https://cloud.githubusercontent.com/assets/14177449/19922082/f4903884-a11b-11e6-8c03-0c7afe20a6ff.png)

### 2. Create a folder /zbserver and a **server.js** in it

```sh
$ mkdir zbserver && cd zbserver
```
```sh
/zbserver$ touch server.js
```

### 3. Install the `zigbee-shepherd` module in /zbserver folder

```sh
/zbserver$ npm install zigbee-shepherd
```

### 4. Edit **server.js**, Start ZigBee Server

* [1] [zigbee-shepherd usage](https://github.com/zigbeer/zigbee-shepherd#Usage)  

```js
var ZShepherd = require('zigbee-shepherd');
var zserver = new ZShepherd('/dev/ttyACM0');

// see [1]
zserver.on('ready', function () {
    console.log('Server is ready.');
});

zserver.start(function (err) {
    if (err)
        console.log(err);
});
```

* **Note:** If you don't know the system path of the serial port, install [serialport](https://www.npmjs.com/package/serialport) globally, then use command line tool `serialport-list` to list all available serial ports.  

```sh
$ npm install -g serialport
```
```sh
$ serialport-list
/dev/ttyACM0    usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B000106B6C5-if00   Texas_Instruments
/dev/ttyS0
/dev/ttyS1
...
```

### 5. Test the Server

```sh
/zbserver$ node server.js
```

### 6. Permit ZigBee devices join the network  

* [1] [zigbee-shepherd usage](https://github.com/zigbeer/zigbee-shepherd#Usage)
* [2] [zserver 'ind' event and endpoint APIs](https://github.com/zigbeer/zigbee-shepherd#APIs)

```js
var ZShepherd = require('zigbee-shepherd');
var zserver = new ZShepherd('/dev/ttyACM0');

// see [1]
zserver.on('ready', function () {
    console.log('Server is ready. Allow devices to join the network within 180 secs.');
    console.log('Waiting for incoming clients or messages...');
    zserver.permitJoin(180);
});

zserver.on('permitJoining', function (joinTimeLeft) {
    console.log(joinTimeLeft);
});

// see [2]
zserver.on('ind', function (msg) {
    switch (msg.type) {
        case 'devIncoming':
            console.log('Device: ' + msg.data + ' joining the network!');
            msg.endpoints.forEach(function (ep) {
                console.log(ep.dump());  // endpoint information
            });
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
```

Run server.js and Let your ZigBee device join the network.

```sh
/zbserver$ node server.js
```

## Section B: Implement a simple application  

In this section, we will use the [GE LINK BULB A19](http://www.gelinkbulbs.com/) and [OSRAM LIGHTIFY CLA60](https://www.osram.com/osram_com/tools-and-services/tools/lightify---smart-connected-light/lightify-for-home---what-is-light-to-you/lightify-products/lightify-classic-a60-tunable-white/index.jsp) to show you how to operate endpoint to simply build up a ZigBee application.  

* **Target:** Toggle the GE bulb, and you will receive the `'devChange'` type indication of `'ind'` event. Then operate the OSRAM bulb in the opposite status, namely GE _on_, OSRAM _off_ and GE _off_, OSRAM _on_.
* [1] [zigbee-shepherd usage](https://github.com/zigbeer/zigbee-shepherd#Usage)
* [2] [zserver 'ind' event and endpoint APIs](https://github.com/zigbeer/zigbee-shepherd#APIs)
* [3] [ZCL functional command](https://github.com/zigbeer/zigbee-shepherd#API_functional)

```js
var ZShepherd = require('zigbee-shepherd');
var zserver = new ZShepherd('/dev/ttyACM0');

// see [1]
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

// see [2]
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
                        // see [3]
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
                        console.log('OSRAM BULB ' + osramBulbStatus.toLowerCase() + '!');
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
```
