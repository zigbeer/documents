# How to use zigbee-shepherd
  

### 1. Create a folder /zbServer and a **server.js** in it

```sh
mkdir zbServer && cd zbServer
```
```sh
touch server.js
```

### 2. Install the `zigbee-shepherd` module in /zbServer folder

```sh
npm install zigbee-shepherd
```

### 4. Edit **server.js**

  
```js
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
```

### 5. Test the Server

```sh
node server.js
```
