import React, { useState, useEffect } from 'react'
import { FetchMovie } from '../../../libs/Omdb'
import { WishlistRemove } from "../../../libs/Firebase";
import { BsTrash } from 'react-icons/bs'


export function MovieWhilist({ movie, currentUser, movieId, refreshWishList}) {

    const [newMovie, setNewMovie] = useState()
    
    useEffect(() => {
        FetchMovie(setNewMovie, movie)
    }, [movie])

    function movieRemove(e) {
        //console.log(e.target.tagName)
        let btn = e.target
        while (btn.tagName !== 'BUTTON') {
            btn = btn.parentNode
            
        }
        
        btn.nextSibling.classList.add('remove')
        btn.parentNode.style.height = '0px'

        setTimeout(() => {
            WishlistRemove(movieId, currentUser)
            refreshWishList()
        }, 900);
        
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
                <button className='remove-btn' onClick={movieRemove}>
                    <BsTrash size='2em'/>  
                </button>
                <div id='overlay-btn' className="overlay-btn"></div>
            </div>
        )
    }
}
