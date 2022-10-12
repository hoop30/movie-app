import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { FetchMovie } from '../../libs/Omdb'
import { RiStarSmileFill } from 'react-icons/ri'
import { Rate } from './components/Rate'
import { Runtime } from './components/Runtime'
import {WishlistAdd} from '../../libs/WishlistAdd'
import { UserContext } from "../../context/userContext"


export function Movie() {

    const { currentUser } = useContext(UserContext)
    const newLocation = useLocation()
    const loc = newLocation.search.substring(3)
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        FetchMovie(setMovie, loc);
    }, [loc]);

    if (movie === null) {
        return <div className='movie-loading'></div>
    } else {
        const image = movie.Poster
        let pg = null
        let year = null
        const runtime = movie.Runtime
        const title = movie.Title
        let desc = null

        //console.log(pg.props.children);
        if (movie.Rated !== "N/A") {
            pg = <p>{movie.Rated}</p>
        }
        if (movie.Year !== "N/A") {
            year = <p>{movie.Year}</p>
        }
        if (movie.Plot !== "N/A") {
            desc = movie.Plot
        }

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
                    {pg}
                    {year}
                        <Runtime runtime={runtime}/>
                    </div>
                    <p className='desc'>{desc}</p>
                    <button className='wishListAdd' onClick={() => WishlistAdd(movie, currentUser)}>Wishlist Add</button>
                </div>
            </div>
        )
    }
}
