module.exports = {
  ari: {
    url: 'http://asterisk:8080',
    username: 'dialogflow',
    password: 'dialogflow',
    appName: 'dialogflow'
  },
  rtpServer: {
    host: 'audioserver',
    port: 7777,
    format: 'slin16'
  },
  mqtt: {
    url: 'mqtt://test.mosquitto.org',
    topicPrefix: 'rjp44'
  },
  asterisk: {
    // If set then Playback the Asterisk sound file specified before bridging to the dialogflow media.
    // Useful for debug and breaking media stand-offs.
    playback: 'silence/1'
  },
}
