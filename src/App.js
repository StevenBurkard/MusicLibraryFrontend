import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NavBar from './Components/NavBar/NavBar';
import MusicTable from './Components/MusicTable/MusicTable';
import AddSongForm from './Components/AddSongForm/AddSongForm';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredSongs = songs.filter((song) => 
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.release_date.toString().includes(searchTerm)
  );
  console.log('Search Results:', filteredSongs);

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

    async function addNewSong(newSong){
      let response = await axios.post("http://127.0.0.1:5000/api/songs", newSong);
      if (response.status === 201){
        getAllsongs();
      }
    }

  return (
    <div className="App">
        <NavBar />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <MusicTable songs={filteredSongs} />
        <AddSongForm addNewSong={addNewSong} />
    </div>
  );
}

export default App;
