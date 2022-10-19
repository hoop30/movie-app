import React, { useState, useEffect } from 'react'
import { FetchMovie } from '../../../libs/Omdb'
import { WishlistRemove } from "../../../libs/Firebase";


export function MovieWhilist({ movie, currentUser, movieId, refreshWishList}) {

    const [newMovie, setNewMovie] = useState()
    
    useEffect(() => {
        FetchMovie(setNewMovie, movie)
    }, [movie])

    function movieRemove() {
        WishlistRemove(movieId, currentUser)
        refreshWishList()
    }

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
                <button className='wishListRemove' onClick={movieRemove}>Remove</button>
            </div>
        )
    }
}
