import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import {navbarLinks} from './content/navbar';

function App() {
  const name = "Ester";
  return (
    <div className="App">
      <Navbar links={navbarLinks}/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
