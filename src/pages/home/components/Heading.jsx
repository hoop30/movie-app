import React from 'react'
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs'
import Placeholder from '../../../assets/provisional/Placeholder.png';

export function Heading() {
    return (
        <div className='home-heading'>
            <img src={Placeholder} alt="" />
            <div>
                <Link to="/">My list</Link>
                <div className='btn-background-film'>
                    <button>
                        <BsPlus />
                        Wishlist
                    </button>
                    <Link to="/">Details</Link>
                </div>
            </div>
        </div>
    )
}
