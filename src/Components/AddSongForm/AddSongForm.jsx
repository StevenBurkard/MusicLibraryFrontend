import React, { useState} from 'react';


const AddSongForm = ({ addSong }) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [release_date, setReleaseDate] = useState("");
    const [genre, SetGenre] = useState("");
    const [likes, setLikes] = useState("");
    const [running_time, setRunningTime] = useState("");


    return ( 
        <form>
            <h3>Add New Song:</h3>
            <label htmlFor="title">Title: </label>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name='title' 
            />
            <label htmlFor='artist'>Artist:</label>
            <input
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                name='artist'
             />
            <label htmlFor='album'>Album</label>
            <input
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
                name='album'
            />
        </form>
     );
}
 
export default AddSongForm;