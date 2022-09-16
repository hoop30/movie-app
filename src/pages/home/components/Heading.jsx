import React from 'react'
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs'
import { HeadingList } from './HeadingList';

export function Heading() {
    return (
        <div className='home-heading'>
            <HeadingList />
            <div className='heading-link'>
                <Link to="/">My list</Link>
                <div className='btn-background-film'>
                    <button>
                        <BsPlus size='1.6em'/>
                        Wishlist
                    </button>
                    <Link to="/">Details</Link>
                </div>
            </div>
        </div>
    )
}
