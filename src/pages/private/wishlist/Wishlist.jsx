import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { UserContext } from "../../../context/userContext"
import { WishlistGet } from '../../../libs/Firebase'
import { MovieWhilist } from './MovieWhilist'

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

  function onRefresh() {
    WishlistGet(currentUser)
      .then(movieList => {
        setWishlist(movieList)
      })
  }

  if (wishlist !== undefined) {

    wishlist.forEach(movie => {
      const newMovie = <MovieWhilist movie={movie.movieTitle} currentUser={currentUser} movieId={movie.movieId} key={movie.movieTitle} refreshWishList={onRefresh} />

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
