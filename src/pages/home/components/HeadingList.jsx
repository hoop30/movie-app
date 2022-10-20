import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FetchTable } from '../../../libs/Omdb'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export function HeadingList({ onUpdateLink, films }) {

    const [list, setList] = useState([])
    const slides = []
    
    useEffect(() => {
        FetchTable(setList, films);
    }, []);

    if (list !== undefined) {
        for (let i = 0; i < list.length; i++) {
            
            const title = list[i].Title
            const img = list[i].Poster

            const newSlide = (
                <SwiperSlide key={i}>
                    <img src={img} alt={title} />
                </SwiperSlide>
            )

            slides.push(newSlide)
        }
    }
  
    return (
            <Swiper 
                pagination={true} 
                modules={[Pagination]}
                className="Heading-Swiper"
                onSlideChange={(swiper) => onUpdateLink(swiper)}
                init>
                {slides}
            </Swiper>
    )
}
