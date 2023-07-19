import React, { useState} from 'react';


const AddSongForm = ({ addNewSong }) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [release_date, setReleaseDate] = useState("");
    const [genre, setGenre] = useState("");
    const [likes, setLikes] = useState(0);
    const [running_time, setRunningTime] = useState(0);

    function handleSubmit(e){
        e.preventDefault();

        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre,
            likes: parseInt(likes),
            running_time: parseFloat(running_time)
        }
        addNewSong(newSong);
    }


    return ( 
        <form onSubmit={handleSubmit}>
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
            <label htmlFor='album'>Album:</label>
            <input
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
                name='album'
            />
            <label htmlFor='release_date'>Release Date:</label>
            <input
                value={release_date}
                onChange={(e) => setReleaseDate(e.target.value)}
                name='release_date'
            />
            <label htmlFor='genre'>Genre:</label>
            <input
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                name='genre'
            />
            <label htmlFor='likes'>Likes:</label>
            <input
                type='number'
                value={likes}
                onChange={(e) => setLikes(e.target.value)}
                name='likes'
            />
            <label htmlFor='running_time'>Running Time:</label>
            <input
                type='number'
                value={running_time}
                onChange={(e) => setRunningTime(e.target.value)}
                name='running_time'
            />
            <button type='submit'>Add Song</button>
        </form>
     );
}
 
export default AddSongForm;