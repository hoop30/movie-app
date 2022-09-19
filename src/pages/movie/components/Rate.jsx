import React from 'react'

export function Rate({ movie }) {

    if (movie.Metascore == "N/A") {
        const rate = movie.Ratings[0].Value
        return rate
    } else {
        const rate = movie.Metascore / 10
        return rate

    }
}
