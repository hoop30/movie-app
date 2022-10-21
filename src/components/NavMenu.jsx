import React, { useContext, useState } from 'react'
import { RiSearch2Line, RiHome5Fill, RiFileList2Fill, RiAccountCircleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { SearchBtnContext } from '../context/SearchBtnContext'
import { UserContext } from "../context/userContext"
import { signOut } from "firebase/auth"
import { useNavigate, useLocation } from 'react-router-dom'
import { auth } from "../libs/firebase-config"
import { useEffect } from 'react'

export function NavMenu() {

    const { SearchBtn, toggleSearchBtn } = useContext(SearchBtnContext)
    const { toggleModals, currentUser } = useContext(UserContext)
    const [classSearchBtn, setClassSearchBtn] = useState('nav-btn')
    const navigate = useNavigate()
    const location = useLocation()
    
    // Change the Active class(color: yellow) on the navBar Links for each location change
    useEffect(() => {
        const Links = document.querySelectorAll('.nav-link')

        Links.forEach(element => {
            if (element.className.includes('active')) {
                element.classList.remove('active')
            }
            if (location.pathname === element.id) {
                element.classList.add('active')
            }
        })
    }, [location.pathname])

    // toggle class of Search Btn to add active class(color: yellow) when search is open.
    if (SearchBtn) {
        if (classSearchBtn !== 'nav-btn active') {
            setClassSearchBtn('nav-btn active')
        }
    } else if (classSearchBtn !== 'nav-btn') {
        setClassSearchBtn('nav-btn')
    }

    const logOut = async () => {
        try {
            await signOut(auth)
            navigate("/movie-app")
        } catch {
            alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
        }
    }

    // Toggle the Search Btn if is open, at click on navbar link
    function HandleClick(e) {

        if (SearchBtn) {
            toggleSearchBtn()
        }
    }

    // Set the Btn LogIn/LogOut
    function log() {
        currentUser === null ? toggleModals("signIn") : logOut()
    }

    return (
        <div className='nav-menu'>
            <nav>
                <div className='nav'>
                    <Link to="/movie-app" id='/movie-app' className='nav-link active' onClick={HandleClick}>
                        <RiHome5Fill size="1.8em" />
                        Home
                    </Link>
                    <button id='searchBtn' className={classSearchBtn} onClick={toggleSearchBtn}>
                        <RiSearch2Line size="1.8em" />
                        Search
                    </button>
                    <Link to="/private" id='/private' className='nav-link' onClick={HandleClick}>
                        <RiFileList2Fill size="1.8em" />
                        Wishlist
                    </Link>
                    <button 
                        id='log'
                        className='nav-link'
                        onClick={() => {
                            log()
                            HandleClick()
                        }}>
                        <RiAccountCircleLine size="1.8em" />
                        {currentUser === null ? 'Login' : 'Logout'}
                    </button>
                </div>
            </nav>
        </div>
    )
}
