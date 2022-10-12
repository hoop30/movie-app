import React, { useState, useEffect } from 'react'
import { FetchMovie } from '../../../libs/Omdb'


export function MovieWhilist({ movie }) {

    const [newMovie, setNewMovie] = useState()

    useEffect(() => {
        FetchMovie(setNewMovie, movie)
    }, [movie])

    if (newMovie !== undefined) {
        const Poster = newMovie.Poster
        const title = newMovie.Title
        const Plot = newMovie.Plot

        return (
            <div className='movieWhilist'>
                <img src={Poster} alt={title} />
                <div>
                    <h2>{title}</h2>
                    <p>{Plot}</p>
                </div>
            </div>
        )
    }
}
