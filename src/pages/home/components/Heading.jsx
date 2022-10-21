import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BiPlus, BiMinus } from 'react-icons/bi'
import { HeadingList } from './HeadingList';
import { useState } from 'react';
import { WishlistAdd, WishlistGet, WishlistRemove } from '../../../libs/Firebase'
import { UserContext } from '../../../context/userContext'

export function Heading() {

    const { currentUser } = useContext(UserContext)
    // Heading movie list show on Slider
    const films = [
        "stranger things",
        "rogue one",
        "pirates of the caribbean",
        "thor love and thunder",
        "WandaVision"
    ]
    const [movieSlide, setMovieSlide] = useState(films[0])
    const [wishList, setWishList] = useState([])
    const [movieId, setMovieId] = useState("")
    const addBtn = addRemoveBtn()

    useEffect(() => {
        setBtn()
    }, [movieSlide, movieId])

    // Refrech user WishList, to set the Add/Remove Btn.
    /*
    Using on componemt mount and on SlideChange
    */
    function setBtn() {

        WishlistGet(currentUser)
            .then(movieList => {
                setWishList(movieList)
            })
        addRemoveBtn()
    }

    // Set Add or Remove Btn by comparison WishList and Curent Slider movieTitle
    function addRemoveBtn() {
        let Btn = true

        wishList.forEach(movie => {
            if (movie.movieTitle.toLowerCase() === movieSlide.toLowerCase()) {
                Btn = false
                if (movieId !== movie.movieId) {
                    setMovieId(movie.movieId)
                }
            }
        })

        return Btn
    }

    // Update the Detail Link on SliderChange
    function updateLink(swiper) {

        setMovieSlide(films[swiper.activeIndex])
    }

    return (
        <div className='home-heading'>
            <HeadingList onUpdateLink={updateLink} films={films} />
            <div className='heading-link'>
                <div className='btn-background-film'>
                    {addBtn ?
                        <button onClick={() => {
                            WishlistAdd({ Title: movieSlide }, currentUser)
                            setBtn()
                        }}>
                            <BiPlus size='1.6em' />
                            Wishlist
                        </button> :
                        <button className='remove' onClick={() => {
                            WishlistRemove(movieId, currentUser)
                            setBtn()
                        }}>
                            <BiMinus size='1.6em' />
                            Wishlist
                        </button>
                    }
                    <Link to={`/movie?m=${movieSlide}`}>Details</Link>
                </div>
            </div>
        </div>
    )
}
