module.exports = {
  rtpServer: {
    port: 7777,
    host: '0.0.0.0',
    swap16: true
  },
  mqtt: {
    url: 'mqtt://test.mosquitto.org',
    prefix: 'rjp44'
  },
  asterisk: {
    // If set then Playback the Asterisk sound file specified before bridging to the dialogflow media.
    // Useful for debug and breaking media stand-offs.
    playback: 'silence/1'
  },
  dialogflow: {
    auth: {
        //credentials: {
        //     private_key: response.dialogFlowPrivateKey,
        //     client_email: response.dialogFlowClientEmail
        //   }
        keyFilename: `./config/credentials.json`,
    },
    project: 'mutualassistclient-rgqcew',
    initialEventName: 'WELCOME',
    enableOutputSpeech: true,
    audioInputConfig: {
      audioEncoding: 'AUDIO_ENCODING_LINEAR_16',
      sampleRateHertz: 16000,
      languageCode: 'en',
      singleUtterance: false
    },
    audioOutputConfig: {
      audioEncoding: 'OUTPUT_AUDIO_ENCODING_LINEAR_16',
      sampleRateHertz: 8000, // should be the same as dialogFlowAudioInputConfig.sampleRateHertz but Asterisk doesnt like 16000 back
      synthesizeSpeechConfig: {
          speakingRate: 1,
          pitch: 5,
          volumeGainDb: 0,
          voice: {
              ssmlGender: `SSML_VOICE_GENDER_FEMALE`
          }
      }
    }
  }
}
