import React, { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api'

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

// Component -> Component is a isolatad block of HTML, CSS and JS, that doesn't interfere with the rest of the application;
// State -> Informations held by the component
// Properties -> Informations that a parent component can pass to a child component 

function App() {
  const [devs, setDevs] = useState([]);


  useEffect(() => {
    async function loadDevs() {
      const res = await api.get('/devs');
      setDevs(res.data);
    }
    loadDevs();
  }, [])

  async function handleAddDev(data) {
    const res = await api.post('/devs', data);

    setDevs([...devs, res.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
         {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
         ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
