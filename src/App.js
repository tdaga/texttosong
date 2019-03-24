import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const client = require('soundoftext-js');
const Tone = require('tone');
const tone = require('./N.mp3');
const noteArray = ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4"];
let samplers = [];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div> Memorize? Harmonize? Melody?</div>
            <form> <input id="facts" type="text"></input>
                <br></br>
            </form>
            <br></br>
            <Potato />
        </header>

      </div>
    );
  }
}

class Potato extends Component {
  constructor(props) {
      super(props);
      this.state = { sampler: null, samplers : null };

      this.run = this.run.bind(this);
  }
  componentDidMount() {
      var sampler = new Tone.Sampler({
          "C3" : "https://soundoftext.nyc3.digitaloceanspaces.com/a5bdc090-f922-11e7-b289-2f4fa9c8406d.mp3"
      }).toMaster();
      this.setState({sampler});
      // sampler.triggerAttackRelease("D3", "8n");
  }

  render() {
    return (
        <div>
            <button id="Oof" onClick={this.run}> Memorize button sound! </button></div>

    )
  }


  run() {
      let nameThing ="";
      let _this = this;
      let textContent = document.getElementById("facts").value;
      let words = textContent.split(" ");
      let promises = [];

      for(let i = words.length -1 ; i >= 0; i--) {

          promises.push(client.sounds.create({ text:words[i], voice: 'en-US' }))

      }

      Promise.all(promises).then((results) => {
          console.log(results);

          let input = this.makeNoteObjects(results);

          this.setSampler(input);


      });




      //hmmm pause?????



      // let values = {};
      //
      // for(let i = 0; i < mp3links; i++) {
      //     let note= Math.floor((Math.random() * noteArray.length));
      //     values[note] = mp3links[i];
      //     values.i = "hi";
      // }

      // console.log(values);


      // var pianoSamples = new Tone.Buffers({
      //     "C3" : "https://tonejs.github.io/examples/audio/casio/C2.mp3"
      // }, function(){
      //     //play one of the samples when they all load
      //     pianoSamples.get("C3").toMaster().triggerAttackRelease("C3", "8n");
      // });


      // for(let i = 0; i < words.length; i++) {
      //     samplers.push(new Tone.Sampler(
      //         {
      //         "C3" : mp3links[i],
      //     }
      //     ));
      //     // sampler.triggerAttackRelease("D3", "8n");
      // }


      //
      // console.log(samplers);
      //
      //
      // samplers[0].toMaster().triggerAttackRelease("C3", "8n");
      //this.setState({samplers});

      //
      //
      // for(let i = 0; i < samplers.length - 1; i++){
      //     let rand = Math.floor((Math.random() * noteArray.length));
      //     samplers[0].triggerAttackRelease("C3", "8n");
      //     // this.state.sampler.triggerAttackRelease(noteArray[rand], "1n");
      // }




        // this.state.sampler.triggerAttackRelease("E3", "1n");



  }

  makeNoteObjects(results) {
      let values = {};

      for(let i = 0; i < results.length; i++) {
          let note = Math.floor((Math.random() * noteArray.length));
          values[noteArray[note]] = results[i];
      }

      console.log(values);

      return values;

  }


  setSampler(input) {
      console.log("reached setSampler");
      let sampler = new Tone.Sampler(
              input , function() {
                  console.log("reached function inside sampler")
                  console.log(Object.keys(input).length + " hellppppp");

                  for(let i = 0; i < Object.keys(input).length; i++) {
                      sampler.triggerAttackRelease(Object.keys(input), "1n");
                      // this.sleep(10000);
                      // new Tone.Delay(10, 0);
                  }

            }
          ).toMaster();
          // sampler.triggerAttackRelease("D3", "8n");

  }

  // sleep(ms) {
  //     var currentTime = new Date().getTime();
  //
  //     while(currentTime + ms >= new Date().getTime()){
  //
  //     }
  // }




}

export default App;
