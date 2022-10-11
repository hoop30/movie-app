import React, {useContext} from 'react'
import {UserContext} from "../../context/userContext"
import Wishlist from "./wishlist/Wishlist"

export default function Private() {

  const {toggleModals, currentUser} = useContext(UserContext)

  if(!currentUser) {
    
    return (
      <h2>To create wishlist please <button onClick={() => toggleModals("signIn")}>log In</button></h2>
    )
  }

  return (
    <Wishlist />
  )
}
