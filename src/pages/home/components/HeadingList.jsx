import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FetchTable } from '../../../libs/Omdb'
import { Link } from 'react-router-dom';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export function HeadingList() {

    const [list, setList] = useState([])
    const slides = []
    const films = [
        "stranger things",
        "rogue one",
        "pirates of the caribbean",
        "thor love and thunder",
        "WandaVision"
    ]
    console.log(list);
    useEffect(() => {
        FetchTable(setList, films);
    }, []);

    if (list !== undefined) {
        for (let i = 0; i < list.length; i++) {
            
            const title = list[i].Title
            const img = list[i].Poster

            const newSlide = (
                <SwiperSlide key={i}>
                    <Link to='/'>
                        <img src={img} alt={title} />
                    </Link>
                </SwiperSlide>
            )

            slides.push(newSlide)
        }
    }
  
    return (
            <Swiper 
                pagination={true} 
                modules={[Pagination]}
                className="Heading-Swiper">
                {slides}
            </Swiper>
    )
}
