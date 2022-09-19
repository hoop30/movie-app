import React, { useContext, useState } from 'react'
import { RiSearch2Line, RiHome5Fill, RiFileList2Fill, RiAccountCircleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { SearchBtnContext } from '../context/SearchBtnContext'

export function NavMenu() {

    const { SearchBtn, toggleSearchBtn } = useContext(SearchBtnContext)
    const [classSearchBtn, setClassSearchBtn] = useState('nav-btn')

    if (SearchBtn) {
        if (classSearchBtn !== 'nav-btn active') {
            setClassSearchBtn('nav-btn active')
        }
    } else if (classSearchBtn !== 'nav-btn') {
        setClassSearchBtn('nav-btn')
    }

    function HandleClick(e) {
        let link = e.target

        while (link.nodeName !== "A") {
            if (link.nodeName === "BUTTON") {
                break
            }
            link = link.parentNode
        }

        if (link.nodeName === "A") {
            colorLink(link)
        }
        if (SearchBtn) {
            toggleSearchBtn()
        }
    }

    function colorLink(link) {
        const Links = document.querySelectorAll('.nav-link')

        Links.forEach(element => {
            if (element.className.includes('active')) {
                element.classList.remove('active')
            }
        })
        link.classList.add('active')
    }

    return (
        <div className='nav-menu'>
            <nav>
                <div className='nav'>
                    <Link to="/movie-app" className='nav-link active' onClick={HandleClick}>
                        <RiHome5Fill size="1.8em" />
                        Home
                    </Link>
                    <button id='searchBtn' className={classSearchBtn} onClick={toggleSearchBtn}>
                        <RiSearch2Line size="1.8em" />
                        Search
                    </button>
                    <Link to="/movie-app" className='nav-link' onClick={HandleClick}>
                        <RiFileList2Fill size="1.8em" />
                        Wishlist
                    </Link>
                    <Link to="/movie-app" className='nav-link' onClick={HandleClick}>
                        <RiAccountCircleLine size="1.8em" />
                        Profile
                    </Link>
                </div>
            </nav>
        </div>
    )
}
