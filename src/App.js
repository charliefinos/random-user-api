import React, { useEffect, useState } from 'react'
import './App.css';
import { getUsers } from './services/users'

function App() {

  const [user, setUser] = useState([])

  const resetCallApi = () => {
    getUsers().then(setUser)
    console.log(user)
  }

  return (
    <div className="App">
      <div>
        {user.map((x) => (
          <div key={x.name.first}>
            <p>Name: {x.name.first} {x.name.last}</p>
            <p>Gender: {x.gender}</p>
          </div>

        ))}
        <button onClick={resetCallApi}>Reset</button>
      </div>

    </div>
  );
}

export default App;
