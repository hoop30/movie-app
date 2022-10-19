import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs'
import { HeadingList } from './HeadingList';
import { useState } from 'react';

export function Heading() {

    const [link, setLink] = useState()

    function updateLink(swiper) {
        console.log(swiper);
        console.log(swiper.slides.length);
        
        if (swiper.slides.length > 0) {
            const title = swiper.slides[swiper.activeIndex].firstChild.alt
            console.log(title)
            setLink(`/movie?m=${title}`)
        } else if ( swiper.slides[0] !== undefined) {
            const title = swiper.slides[0].firstChild.alt
            
            setLink(`/movie?m=${title}`)
        }
    }


    return (
        <div className='home-heading'>
            <HeadingList onUpdateLink={updateLink} />
            <div className='heading-link'>
                <div className='btn-background-film'>
                    <button>
                        <BsPlus size='1.6em' />
                        Wishlist
                    </button>
                    <Link to={link}>Details</Link>
                </div>
            </div>
        </div>
    )
}
