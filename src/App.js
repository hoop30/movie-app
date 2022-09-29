import './App.scss';
import { Home } from './pages/home/Home'
import { Routes, Route } from "react-router-dom";
import './fonts/Gilroy/Gilroy-ExtraBold.otf'
import './fonts/Gilroy/Gilroy-Light.otf'
import { NavMenu } from './components/NavMenu'
import { Movie } from './pages/movie/Movie'
import { Search } from './components/Search'
import SearchBtnContextProvider from './context/SearchBtnContext'
import SignInModal from './components/SignInModal'
import SignUpModal from './components/SignUpModal'
import Private from "./pages/private/Private"
import Wishlist from "./pages/private/wishlist/Wishlist"


function App() {

    return (
        <div className="app">
            <SignUpModal />
            <SignInModal />
            <Routes>
                <Route path="/movie-app" element={<Home />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/private" element={<Private />}>
                    <Route path="/private/wishlist" element={<Wishlist />} />
                </Route>
            </Routes>
            <SearchBtnContextProvider>
                <NavMenu />
                <Search />
            </SearchBtnContextProvider>
        </div>
    )
}

export default App;