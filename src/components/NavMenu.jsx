import React from 'react'
import { RiSearch2Line, RiHome5Fill, RiFileList2Fill, RiAccountCircleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export function NavMenu({handleclick}) {
    return (
        <div className='nav-menu'>
            <nav>
                <div className='nav'>
                    <Link to="/movie-app" className='nav-btn active' onClick={handleclick}>
                        <RiHome5Fill size="1.8em"/>
                        Home
                    </Link>
                    <button className='nav-btn' onClick={handleclick}>
                        <RiSearch2Line size="1.8em"/>
                        Search
                    </button>
                    <Link to="/movie-app" className='nav-btn' onClick={handleclick}>
                        <RiFileList2Fill size="1.8em"/>
                        Wishlist
                    </Link>
                    <Link to="/movie-app" className='nav-btn' onClick={handleclick}>
                        <RiAccountCircleLine size="1.8em"/>
                        Profile
                    </Link>
                </div>
            </nav>
        </div>
    )
}
