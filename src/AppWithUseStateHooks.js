import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
let switcher = true

const App = props => {
    const [ personState, setPersonState ] = useState({
        persons: [
            { name: 'Brian', age: 39 },
            { name: 'Lily', age: 25 },
            { name: 'Cindy', age: 27 }
        ]
    })

    const switchNameHandler = () => {
        if (switcher) {
            switcher = false
            setPersonState ({
                persons: [
                    { name: 'Brian', age: 39 },
                    { name: 'Lily', age: 25 },
                    { name: 'Cindy', age: 27 }
                ]
            })
        } else {
            switcher = true
            setPersonState ({
                persons: [
                    { name: 'BrianOfMoore', age: 39 },
                    { name: 'Lily Nanner', age: 25 },
                    { name: 'Cindy Crawford', age: 27 }
                ]
            })
        }
    }

    return (
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <button onClick={switchNameHandler}>Full Names</button>
              Why Don't You Learn React
            <Person
             name={personState.persons[0].name}
             age={personState.persons[0].age}
             />
             <Person
             name={personState.persons[1].name}
             age={personState.persons[1].age}
             />
             <Person
             name={personState.persons[2].name}
             age={personState.persons[2].age}
             />
          </header>
        </div>
    )
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Why Don't You Learn React
        </a>
        <Person></Person>
      </header>
    </div>
  );
} */

export default App;
