import React from 'react'
import { Link } from 'react-router-dom';

export function SearchResponse({response, searchReset}) {

    const responseList = []

    function closeSearch() {
        searchReset()
    }

    if (response !== undefined) {
        if (response.length > 0) {
            response.forEach(movie => {
                const link = `/movie?m=${movie.Title}`
                const title = <Link to={link} onClick={closeSearch} key={movie.Title}>{movie.Title}</Link> 
        
                responseList.push(title)
                return responseList
            })
        }
    }

    return (
        <div className='search-response'>
            {responseList}
        </div>
    )
}
