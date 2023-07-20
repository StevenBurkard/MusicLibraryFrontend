import React, { useState } from 'react';

function SearchBar({ searchTerm, setSearchTerm }){

    return (
        <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}

export default SearchBar;