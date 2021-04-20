import React, { useState } from 'react';
import Form from './Form';

const teamList = [
  { name: 'Devin', position: 'shooting guard', height: '71', age: '28'},
  { name: 'Michael', position: 'center', height: '78', age: '42'},
  { name: 'Cooper', position: 'small forward', height: '74', age: '27'},
];
  
const initialFormValues = {
  name: '',
  position: '',
  height: '',
  age: '',
}

function App() {
  const [players, setPlayers] = useState(teamList)
  const [formValues, setFormValues] = useState(initialFormValues)

 
const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues, [inputName]: inputValue
    })
}

const submitForm = (evt) => {
  evt.preventDefault();

  const newPlayer = {
   name: formValues.name.trim(),
   height: formValues.height.trim(),
   age: formValues.age.trim(),
   position: formValues.position
  }
  setPlayers([...players, newPlayer])
  setFormValues(initialFormValues)
}

  return (
    <>
      <Form 
        players={players}
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      <h1>Really Bad Basketball Team</h1>
      {players.map((player, index) => {
        return(
          <div key={index} >
            Name: {player.name}, 
            Position: {player.position}
            Height: {player.height}
            Age: {player.age}
          </div>
        )
      })}
    </>
  );
}

export default App;
