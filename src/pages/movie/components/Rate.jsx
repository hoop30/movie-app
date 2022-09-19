
export function Rate({ movie }) {

    if (movie.Metascore === undefined || movie.Metascore === "N/A") {
        if (movie.Ratings[0] !== undefined) {
            const rate = movie.Ratings[0].Value
            return rate
        }
    } else {
        const rate = movie.Metascore / 10
        return rate
    }
}
