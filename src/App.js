import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Potato />
        <header className="App-header">
          <div> Memorize? Harmonize? Melody?</div>
            <form> <input type="text"></input>
                <br></br>
            </form>
            <br></br>
            <button>Melodize my knowledge!</button>
        </header>

      </div>
    );
  }
}

class Potato extends Component {
  render() {
    return (
        <div> HOW WONDERFUL
            <button id="Oof" onClick={this.run}> Off ouch my npn bones </button></div>

    )
  }

  run() {

      const client = require('soundoftext-js');
      const Tone = require('tone');
      var nameThing ="";


      client.sounds.create({ text:'Hello, world!', voice: 'en-US' })
          .then(soundUrl => {
              console.log(soundUrl); // https://soundoftext.nyc3.digitaloceanspaces.com/<sound-id>.mp3
              nameThing = soundUrl;

              console.log(nameThing + " e hhh");


          })
          .catch(e => {
              /* Reasons that the Promise might get rejected:
               * - after 60 seconds, it automatically times out
               * - the API might fail to create the sound or reject it
               * - other miscellaneous network issues
               */
          });




      //
      // var sampler = new Tone.Sampler({
      //     "C3" : nameThing,
      //     "D3" : nameThing,
      //     // "D#3" : "path/to/Dsharp3.mp3",
      //     // "F#3" : "path/to/Fsharp3.mp3",
      //     // "A3" : "path/to/A3.mp3",
      // }, function(){
      //     //sampler will repitch the closest sample
      //     sampler.triggerAttack("D3")
      // }).toMaster();
      //
      // sampler.triggerAttackRelease("D3", "8n")


      // var sampler = new Tone.Sampler({
      //     'C3' : nameThing
      //     //'D3' : 'tones.[mp3|ogg]',
      //     //'E3' : 'cymbal.[mp3|ogg]',
      //     //'F3' : 'piano.[mp3|ogg]',
      //     //'G3' : 'synth.[mp3|ogg]',
      // }, {
      //     'release' : 1,
      // }).toMaster();
      // sampler.triggerAttack("C3")


      // var sampler = new Tone.Sampler({
      //     "A0" :  nameThing,
      // }, {
      //     "release" : 1,
      //     "baseUrl" : "./audio/salamander/"
      // }).toMaster();

//
//       var player = new Tone.Player(nameThing).toMaster();
// //play as soon as the buffer is loaded
//       player.autostart = true;
//
//       player.triggerAttackRelease("A4", "8n")



      // sampler.triggerAttackRelease("A4", "8n");


      // sampler.triggerAttackRelease("A4", "8n");

      // var buffer = new Tone.Buffer("./public/N.mp3", function(){
      //     //the buffer is now available.
      //     var buff = buffer.get();
      // });


//
// //create a synth and connect it to the master output (your speakers)
//       var synth = new Tone.Synth().toMaster();

      //
      // var synth = new Tone.Sampler({'C3' : buffer
      // }).toMaster();
      //
      // synth.buffer = buffer;
      //
      // console.log(synth.loaded);

      var player = new Tone.Player("./public/N.mp3").toMaster();
//play as soon as the buffer is loaded
      player.autostart = true;

// //play a middle 'C' for the duration of an 8th note
//       synth.triggerAttack('C3', "1n");
  }
}

export default App;
