// npm run start \\ npm run build for production
import React, { useState } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium'
import Person from './Person/Person'

const App = props => {
    const [ personState, setPersonState ] = useState({
        persons: [
            { name: 'Brian', age: 40, id: 'bid2'},
            { name: 'Lily', age: 25, id: 'lid3' },
            { name: 'Cindy', age: 27, id: 'cid4' }
        ],
        showPersons: false
    })

    const switchNameHandler = (event, id) => {
        const personIndex = personState.persons.findIndex(p => {
            return p.id === id
        })

        const person = {...personState.persons[personIndex]}

        console.log(event.target)
        person.name = event.target.value

        const people = [...personState.persons]
        people[personIndex] = person

        setPersonState ({ showPersons: true, persons: [...people] })
    }


    const togglePersonsHandler = () => {
        const doesShow = personState.showPersons
        setPersonState({
            ...personState,
            showPersons: !doesShow
        })
    }

    const deletePersonHandler = (personIndex) => {
        console.log('madeIt')
        console.log(personIndex)
        const persons = [...personState.persons]
        persons.splice(personIndex, 1)
        console.log(persons)

        setPersonState({persons: persons, showPersons: true})
    }

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor:'lightgreen'
        }
    }

    let people = null

    if (personState.showPersons) {
        people = (
            <div>
                {personState.persons.map((person, index) => {
                    return <Person
                        click={() => deletePersonHandler(index)}
                        name={person.name}
                        age={person.age} 
                        key={person.id}
                        changed={(event) => {switchNameHandler(event, person.id)}}/>
                })}
            </div>
        )

        style.backgroundColor = 'grey'
        style[':hover'] = {
            backgroundColor: 'darkgreen'
        }
    }

    let classes = ['red', 'bold'].join(' ')

    return (
        <StyleRoot>
            <div className="App">
            <header className="App-header">
                <button 
                    style={style}
                    onClick={togglePersonsHandler}>Show Names</button>
                
                {people}
            </header>
            </div>
        </StyleRoot>
    )
} 

export default Radium(App)
