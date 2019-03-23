const client = require('soundoftext-js');
const Tone = require('tone');


// var test;


// client.sounds.create({ text:'Hello, world!', voice: 'en-US' })
//     .then(soundUrl => {
//         console.log(soundUrl); // https://soundoftext.nyc3.digitaloceanspaces.com/<sound-id>.mp3
//     })
//     .catch(e => {
//         /* Reasons that the Promise might get rejected:
//          * - after 60 seconds, it automatically times out
//          * - the API might fail to create the sound or reject it
//          * - other miscellaneous network issues
//          */
//     });

//create a synth and connect it to the master output (your speakers)
// var synth = new Tone.Synth().toMaster();

//play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "8n");