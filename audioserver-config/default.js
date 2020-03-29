module.exports = {
    rtpServer: {
        port: 7777,
        host: 'audioserver',
        swap16: true
    },
    mqtt: {
        url: 'mqtt://test.mosquitto.org',
        prefix: 'rjp44'
    },
    dialogflow: {
        //credentials: {
        //     private_key: response.dialogFlowPrivateKey,
        //     client_email: response.dialogFlowClientEmail
        //   }
        keyFilename: `./config/credentials.json`,
        project: 'mutualassistclient-rgqcew',
        initialEventName: 'WELCOME'
    }
}
