import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { UserContext } from "../../../context/userContext"
import { WishlistGet } from '../../../libs/Firebase'
import { MovieWishlist } from './MovieWishlist'

export default function Wishlist() {

  const { currentUser } = useContext(UserContext)
  const [wishlist, setWishlist] = useState()
  let list = []
  
  useEffect(() => {
    WishlistGet(currentUser)
      .then(movieList => {
        setWishlist(movieList)
      })
  }, [currentUser])

  // Refresh WishList on MovieWishList
  function onRefresh() {
    WishlistGet(currentUser)
      .then(movieList => {
        setWishlist(movieList)
      })
  }

  if (wishlist !== undefined) {

    // Update the list with all movies of WishList
    wishlist.forEach(movie => {
      const newMovie = <MovieWishlist movie={movie.movieTitle} currentUser={currentUser} movieId={movie.movieId} key={movie.movieTitle} refreshWishList={onRefresh} />

      list.push(newMovie)
    });
  }

  return (
    <div className="wishlist">
      <h2>Welcome to your Wishlist</h2>
      {list}
    </div>
  )
}
