import './App.scss';
import { Home } from './pages/home/Home'
import { Routes, Route } from "react-router-dom";
import './fonts/Gilroy/Gilroy-ExtraBold.otf'
import './fonts/Gilroy/Gilroy-Light.otf'
import { NavMenu } from './components/NavMenu'
import { Movie } from './pages/movie/Movie'
import { Search } from './components/Search'
import SearchBtnContextProvider from './context/SearchBtnContext'

function App() {

    return (
        <div className="app">
            <Routes>
                <Route path="/movie-app" element={<Home />} />
                <Route path="/movie" element={<Movie />} />
            </Routes>
            <SearchBtnContextProvider>
                <NavMenu />
                <Search />
            </SearchBtnContextProvider>
        </div>
    )
}

export default App;