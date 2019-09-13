const env = require("./config.native.json");

const config = {
    development: {
        baseApiUrl: `http://${env.LOCAL_IP}:3000/`
    },
    production: {
        baseApiUrl: 'https://merrnn.herokuapp.com/'
    }
};

export default config;
