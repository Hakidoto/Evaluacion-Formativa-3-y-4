import './App.css';
import {useState} from 'react';
import {datosAleatorios} from './Componentes/RandomUserAPI';
import { Card } from './Componentes/Card'

function App() {
  // Esta funcion inicia useState con un arreglo vacio
  const[users,SetUsers] = useState([]);

  const newUser=() => {
    const oldUsers = [...users];
    datosAleatorios().then((usuarios) => {
      SetUsers([...oldUsers, ...usuarios]);
    });
  };

  if (users.length === 0) {
    datosAleatorios().then((usuarios) => {
      SetUsers(usuarios);
    });
  } else {
    return (
      <>
      <header>
        <div className='title'>
          <h1> Profiles App</h1>
          <h2> De HTML a API REST</h2>
        </div>
      </header>
      <main>
        <Card users={users} newUser={newUser} />
      </main>
      </>
    );
  }



}

export default App;
