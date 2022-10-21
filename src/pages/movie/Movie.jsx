import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { FetchMovie } from '../../libs/Omdb'
import { RiStarSmileFill } from 'react-icons/ri'
import { Rate } from './components/Rate'
import { Runtime } from './components/Runtime'
import { WishlistAdd, WishlistGet, WishlistRemove } from '../../libs/Firebase'
import { UserContext } from "../../context/userContext"


export function Movie() {

    const { currentUser } = useContext(UserContext)
    const newLocation = useLocation()
    const loc = newLocation.search.substring(3)
    const [movie, setMovie] = useState(null)
    const [wishList, setWishList] = useState([])
    const [movieId, setMovieId] = useState("")
    const addBtn = addRemoveBtn()

    useEffect(() => {
        FetchMovie(setMovie, loc)
        setBtn()
    }, [loc]);

    // Refrech user WishList, to set the Add/Remove Btn.
    /*
    Using on componemt mount and on Btn click
    Timeout to get the WishList after Add or Removed
    */
    function setBtn() {
        setTimeout(() => {
            WishlistGet(currentUser)
            .then(movieList => {
                setWishList(movieList)
            })
        addRemoveBtn()
        }, 100);
    }

    // Set Add or Remove Btn by comparison WishList and Curent movieTitle
    function addRemoveBtn() {
        let Btn = true

        wishList.forEach(movieWish => {
            
            if (movieWish.movieTitle.toLowerCase() === movie.Title.toLowerCase()) {
                Btn = false
                
                if (movieId !== movieWish.movieId) {
                    setMovieId(movieWish.movieId)
                    console.log('ok')
                }
            }
        })
        return Btn
    }

    if (movie === null) {

        return <div className='movie-loading'></div>
    } else {

        const image = movie.Poster
        let pg = null
        let year = null
        const runtime = movie.Runtime
        const title = movie.Title
        let desc = null

        // Prevent to display "N/A" if variable is not specified
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
                    {addBtn ?
                        <button className='wishListAdd' onClick={() => {
                                WishlistAdd(movie, currentUser)
                                setBtn()
                            }}>
                            Wishlist Add
                        </button> :
                        <button className='wishListAdd remove' onClick={() => {
                                WishlistRemove(movieId, currentUser)
                                setBtn()
                            }}>
                            Wishlist Remove
                        </button>
                    }
                </div>
            </div>
        )
    }
}
