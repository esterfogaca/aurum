import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import {navbarLinks} from './content/navbar';
import PostCard from './components/PostCard';

function App() {
  const name = "Ester";
  return (
    <div className="App">
      <Navbar links={navbarLinks}/>
      <main>
        <PostCard />
        <PostCard />
      </main>
    </div>
  );
}

export default App;
