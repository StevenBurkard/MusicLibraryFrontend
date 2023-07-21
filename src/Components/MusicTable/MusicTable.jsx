import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import './MusicTable.css'

function MusicTable({ songs }){
    console.log(songs);
    return (
        <TableContainer component={Paper} sx={{backgroundColor:"#41436A"}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{color:"#FE9677"}}>Title</TableCell>
                        <TableCell align='right' sx={{color:"#FE9677", fontFamily: "Fira Sans, sans-serif"}}>Artist</TableCell>
                        <TableCell align='right' sx={{color:"#FE9677", fontFamily: "Fira Sans, sans-serif"}}>Album</TableCell>
                        <TableCell align='right' sx={{color:"#FE9677", fontFamily: "Fira Sans, sans-serif"}}>Release Date</TableCell>
                        <TableCell align='right' sx={{color:"#FE9677", fontFamily: "Fira Sans, sans-serif"}}>Genre</TableCell>
                        <TableCell align='right' sx={{color:"#FE9677", fontFamily: "Fira Sans, sans-serif"}}>Likes</TableCell>
                        <TableCell align='right' sx={{color:"#FE9677", fontFamily: "Fira Sans, sans-serif"}}>Running Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {songs.map((song, index) => (
                        <TableRow
                         key={index}
                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{color: "#50C9CE", fontFamily:"DM Sans, sans-serif"}}>
                                {song.title}
                            </TableCell>
                            <TableCell align='right' sx={{color:"#50C9CE", fontFamily:"DM Sans, sans-serif"}}>{song.artist}</TableCell>
                            <TableCell align='right' sx={{color:"#50C9CE", fontFamily:"DM Sans, sans-serif"}}>{song.album}</TableCell>
                            <TableCell align='right' sx={{color:"#50C9CE", fontFamily:"DM Sans, sans-serif"}}>{song.release_date}</TableCell>
                            <TableCell align='right' sx={{color:"#50C9CE", fontFamily:"DM Sans, sans-serif"}}>{song.genre}</TableCell>
                            <TableCell align='right' sx={{color:"#50C9CE", fontFamily:"DM Sans, sans-serif"}}>{song.likes}</TableCell>
                            <TableCell align='right' sx={{color:"#50C9CE", fontFamily:"DM Sans, sans-serif"}}>{song.running_time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MusicTable;