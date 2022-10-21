import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FetchList } from '../../../libs/Omdb'
import { Link } from 'react-router-dom';
// Import Swiper styles
import "swiper/css";

export function List({ name }) {

    const [list, setList] = useState()
    const slides = []

    useEffect(() => {
        FetchList(setList, name);
    }, [name]);

    // Create and format List with name, to add a movie list slide
    if (list !== undefined) {
        for (let i = 0; i < list.length; i++) {
            
            const title = list[i].Title
            const img = list[i].Poster
            const link = `/movie?m=${title}`

            const newSlide = (
                <SwiperSlide key={i}>
                    <Link to={link}>
                        <img src={img} alt={title}  width='120px' height='160px'/>
                        <p>{title}</p>
                    </Link>
                </SwiperSlide>
            )

            slides.push(newSlide)
        }
    }

    return (
        <div className="list">
            <h2>{name}</h2>
            <Swiper slidesPerView={3} spaceBetween={16} className="mySwiper">
                {slides}
            </Swiper>
        </div>
    )
}
