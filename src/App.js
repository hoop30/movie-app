import './App.scss';
import { Home } from './pages/home/Home'
import { Routes, Route } from "react-router-dom";
import './fonts/Gilroy/Gilroy-ExtraBold.otf'
import './fonts/Gilroy/Gilroy-Light.otf'
import { NavMenu } from './components/NavMenu'
import { Movie } from './pages/movie/Movie'

function App() {

    function onHandleClick(e) {
        let link = e.target
        
        while (link.nodeName !== "A") {
            if (link.nodeName === "BUTTON") {
                break
            }
            link = link.parentNode
        }

        colorLink(link)
    }

    function colorLink(link) {
        const Links = document.querySelectorAll('.nav-btn')
        
        Links.forEach(element => {
            if (element.className.includes('active')) {
                element.classList.remove('active')
            }
        })
        link.classList.add('active')
    }

    return (
        <div className="app">
            <Routes>
                <Route path="/movie-app" element={<Home />} />
                <Route path="/movie" element={<Movie />} />
            </Routes>
            <NavMenu handleclick={onHandleClick}/>
        </div>
    )
}

export default App;
