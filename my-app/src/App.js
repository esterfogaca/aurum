import React, { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import {navbarLinks} from './content/navbar';
import PostCard from './components/PostCard';

const App = () => {
  const [ data, setData ] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://aurumtest.000webhostapp.com/wp-json/wp/v2/posts?_embed&filter[orderby]=date&order=desc');
      let data = await response.json()
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar links={navbarLinks}/>
      <main>
        {data ? data.map( ({ slug, title, excerpt, link, _embedded }) => {
          return <PostCard key={slug} image={_embedded["wp:featuredmedia"][0].source_url} title={title.rendered} excerpt={excerpt.rendered} url={link} type={_embedded["wp:term"][1][0].name} />
        }) : 'CARREGANDO...'}
      </main>
    </div>
  );
}

export default App;
