import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FetchMovie } from '../../libs/Omdb'
import { RiStarSmileFill } from 'react-icons/ri'
import { Rate } from './components/Rate'
import { Runtime } from './components/Runtime'

export function Movie() {

    const newLocation = useLocation()
    const loc = newLocation.search.substring(3)
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        FetchMovie(setMovie, loc);
    }, []);

    if (movie === null) {
        return <div className='movie-loading'></div>
    } else {
        const image = movie.Poster
        const pg = movie.Rated
        const year = movie.Year
        const runtime = movie.Runtime
        const title = movie.Title
        const desc = movie.Plot

        return (
            <div className="movie-layout">
                <img src={image} alt="" />
                <div className='info'>
                    <span className='rate'>
                        <RiStarSmileFill />
                        <Rate movie={movie}/>
                    </span>
                    <h2>{title}</h2>
                    <div className='micro-info'>
                        <p>{pg}</p>
                        <p>{year}</p>
                        <Runtime runtime={runtime}/>
                    </div>
                    <p className='desc'>{desc}</p>
                    <button className='wishListAdd'>Wishlist Add</button>
                </div>
            </div>
        )
    }
}
