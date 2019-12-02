import React from 'react';
import './App.css';

class App extends React.Component{

  state={
    answer: [
      ''
    ]
  }; 



  render(){
    return <> 
    <div className="body">
      <h1>Jennifer's MadLib</h1>
      <br></br>

      <ol>
        <li>Favorite Person : <input type="text" id="noun" onChange={e => this.setState({noun: e.target.value})} /> </li>
        <li>Number : <input type="text" id="number" onChange={e => this.setState({number: e.target.value})} /> </li>
        <li>Vehicle : <input type="text" id="vehicle" onChange={e => this.setState({vehicle: e.target.value})} /> </li>
        <li>Adjective: <input type="text" id="adjective" onChange={e => this.setState({adjective: e.target.value})} /></li>
        <li>Adjective : <input type="text" id="adjective" onChange={e => this.setState({adjective2: e.target.value})} /> </li>
        <li>Verb with -ing <input type="text" id="verbing" onChange={e => this.setState({verbing: e.target.value})} /> </li>
        <li>Animal : <input type="text" id="animal" onChange={e => this.setState({animal: e.target.value})} /> </li>
        <li>Adjective : <input type="text" id="adjective3" onChange={e => this.setState({adjective3: e.target.value})} /> </li>
        <li>Past Tense Verb<input type="text" id="past" onChange={e => this.setState({past: e.target.value})} /> </li>
        <li>Adjective : <input type="text" id="adjective4" onChange={e => this.setState({adjective4: e.target.value})} /> </li>
        <li>Noun : <input type="text" id="noun2" onChange={e => this.setState({noun2: e.target.value})} /> </li>

        <li>Past Tense Verb<input type="text" id="past2" onChange={e => this.setState({past2: e.target.value})} /> </li>
        <li>Past Tense Verb<input type="text" id="past3" onChange={e => this.setState({past3: e.target.value})} /> </li>

        <li>Adverb <input type="text" id="adverb" onChange={e => this.setState({adverb: e.target.value})} /> </li>
        <li>Past Tense Verb<input type="text" id="past" onChange={e => this.setState({past: e.target.value})} /> </li>
      </ol>
        
      <button onClick={e => this.onSubmit()}>Let's Lib!</button>

      
      <br></br>
      <h2>Our Story begins....</h2>
      <p>
      Last month, I went to Disney World with {this.state.noun} . <br></br>
      We traveled for {this.state.number} by {this.state.vehicle}. <br></br>
      Finally, we arrived and it was very {this.state.adjective}. <br></br>
      There were {this.state.adjective2} people {this.state.verbing} everywhere.<br></br> 
      There were also people dressed up in {this.state.animal} costumes.<br></br>
      I wish it had been more {this.state.adjective3}, but we {this.state.past} <br></br> 
      anyway. We also went on a(n) {this.state.adjective4} ride<br></br>
      called Magic {this.state.noun2}. {this.state.noun} nearly fell off a ride and <br></br>
      had to be {this.state.past}. Later, we went to the hotel and <br></br>
      __________(past tense verb). Next year, I want to go to __________(place),<br></br>
      where we can ________(verb). <br></br>


      </p>






    </div>
    </>
  }

  onSubmit(){

  }

};

export default App;
