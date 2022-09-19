export const FetchList = async (setList, search) => {

    const url = `https://www.omdbapi.com/?apikey=865a7117&s=${search}`

    const response = await fetch(url)

    const film = await response.json()
    setList(film.Search)
}

export const FetchMovie = async (setMovie, search) => {
    
    const url = `https://www.omdbapi.com/?apikey=865a7117&t=${search}`

    const response = await fetch(url)

    const film = await response.json()
    setMovie(film)
}

export const FetchTable = async (setList, searchTable) => {

    const url0 = `https://www.omdbapi.com/?apikey=865a7117&t=${searchTable[0]}`
    const url1 = `https://www.omdbapi.com/?apikey=865a7117&t=${searchTable[1]}`
    const url2 = `https://www.omdbapi.com/?apikey=865a7117&t=${searchTable[2]}`
    const url3 = `https://www.omdbapi.com/?apikey=865a7117&t=${searchTable[3]}`
    const url4 = `https://www.omdbapi.com/?apikey=865a7117&t=${searchTable[4]}&y=2021`

    const response0 = await fetch(url0)
    const response1 = await fetch(url1)
    const response2 = await fetch(url2)
    const response3 = await fetch(url3)
    const response4 = await fetch(url4)
    
    const film0 = await response0.json()
    const film1 = await response1.json()
    const film2 = await response2.json()
    const film3 = await response3.json()
    const film4 = await response4.json()

    setList([film0, film1, film2, film3, film4])
}

// ========

/*

, { useState, useEffect }
import React, { useState, useEffect } from 'react'


const [filmImg, setFilmImg] = useState()
    
useEffect(() => {
    FetchFilmImg(setFilmImg);
}, []);

*/