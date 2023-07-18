import React from 'react';

function MusicTable({ songs }){
    console.log(songs);
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Likes</th>
                    <th>Running Time</th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song, index) => (
                    <tr key={index}>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td>{song.genre}</td>
                        <td>{song.likes}</td>
                        <td>{song.running_time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MusicTable;