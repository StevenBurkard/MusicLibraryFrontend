import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [songs, setSongs] = useState([]);

    useEffect(() => {
      getAllsongs();
    }, [])

    async function getAllsongs(){
      try{
        let response = await axios.get('http://127.0.0.1:5000/api/songs');
        console.log(response);
        setSongs(response.data)
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
