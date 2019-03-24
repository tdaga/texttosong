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


          <link href="https://fonts.googleapis.com/css?family=Baloo+Chettan" rel="stylesheet"></link>

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                crossOrigin="anonymous"></link>



        <header className="App-header area">
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

          <div className="Title goDown"> Remelody</div>
            <div className="sub-header goDown2"> Memorize your facts with melodies! </div>

            <br></br>
            <br></br>
            {/*<form> <input id="facts" class="form" type="text" placeholder="Input a fact! Or a phrase you want to memorize!"></input>*/}
                {/*<br></br>*/}
            {/*</form>*/}


            <label htmlFor="inp" className="inp">
                <input type="text" id="facts" className="inp" placeholder="&nbsp;" autocomplete="off"></input>
                    <span className="label oof">Input a fact you want to memorize!</span>
                    <span className="border"></span>
            </label>

            <br></br>
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
            <button className="btn" onClick={this.run} type="button"><span><i className="fas fa-music"></i></span></button>
            {/*<button id="Oof" onClick={this.run}> Memorize button sound! </button>*/}

        </div>

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

          // this.playBackground();


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

//play a middle 'C' for the duration of an 8th note


      let sampler = new Tone.Sampler(
              input , function() {
                  console.log("reached function inside sampler")
                  console.log(Object.keys(input).length + " hellppppp");

                  for(let i = 0; i < 200; i++) {
                      let note = Math.floor((Math.random() * noteArray.length));
                      sampler.triggerAttackRelease(noteArray[note], "1n", i);
                      // synth.triggerAttack(noteArray[note]);

                      // sampler.triggerAttackRelease("D3", "4n", i + 2);
                      // sampler.triggerAttackRelease("E3", "1n", i + 3);
                      // this.sleep(10000);
                      // new Tone.Delay(10, 0);
                  }
              // synth.triggerAttackRelease(noteArray[0], '1n').toMaster();

            }
          ).toMaster();


      return sampler;
          // sampler.triggerAttackRelease("D3", "8n");

  }


  playBackground() {
      // var synth = new Tone.Synth().toMaster();
      //
      // var music = [{"time": 0, "note": "A4", "duration": "16n"},
      // {"time": 23.5, "note": "A4", "duration": "8n"},
      // {"time": 24, "note": "G4", "duration": "4n"}];

      // function playMusic(){
      //     var part = new Tone.Part(function(time, note){
      //         //the notes given as the second element in the array
      //         //will be passed in as the second argument
      //         console.log(note);
      //         synth.triggerAttackRelease(note.note, note.duration, time);
      //     }, music).start(0);
      //
      //     Tone.Transport.start();
      // }
      //
      // playMusic();

      // }
      // synth.triggerAttackRelease(noteArray[0], '1n').toMaster();
      // synth.triggerAttackRelease(noteArray[0], '1n').toMaster();



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
