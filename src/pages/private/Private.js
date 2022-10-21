import React, { useContext } from 'react'
import { UserContext } from "../../context/userContext"
import Wishlist from "./wishlist/Wishlist"

export default function Private() {

  const { toggleModals, currentUser } = useContext(UserContext)

  if (!currentUser) {

    return (
      <div className='wishlist-log'>
        <h2>To create wishlist please </h2>
        <button onClick={() => toggleModals("signIn")}>log In</button>
      </div>
    )
  }

  return (
    <Wishlist />
  )
}
