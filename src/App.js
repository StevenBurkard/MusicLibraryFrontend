import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';

function App() {
  const [songs, setSongs] = useState([]);

    useEffect(() => {
      getAllsongs();
    }, []);

    async function getAllsongs(){
      try{
        let response = await axios.get('http://127.0.0.1:5000/api/songs');
        console.log(response.data);
        setSongs(response.data.songs)
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    }

  return (
    <div className="App">
        < MusicTable songs={songs} />
    </div>
  );
}

export default App;
