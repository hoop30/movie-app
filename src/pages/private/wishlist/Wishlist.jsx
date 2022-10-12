import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { UserContext } from "../../../context/userContext"
import { WishlistGet } from '../../../libs/WishlistGet'
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

  if (wishlist !== undefined) {
    wishlist.forEach(movie => {
      const newMovie = <MovieWhilist movie={movie} />
  
      list.push(newMovie)
    });
  }

  console.log(list);
  return (
    <div className="wishlist">
      <h2>Welcome to your Wishlist</h2>
      {list}
    </div>
  )
}
