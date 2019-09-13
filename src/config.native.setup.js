const os = require('os');
const fs = require('fs');

function getLocalIp() {
    for (let addresses of Object.values(os.networkInterfaces())) {
        for (let add of addresses) {
            if (add.address.startsWith('192.168.')) {
                return add.address;
            }
        }
    }
}

fs.writeFileSync("./src/config.native.json", JSON.stringify({
    LOCAL_IP: getLocalIp()
}));