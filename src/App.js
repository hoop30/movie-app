import './App.scss';
import { Home } from './pages/home/Home'
import { Routes, Route } from "react-router-dom";
import './fonts/Gilroy/Gilroy-ExtraBold.otf'
import './fonts/Gilroy/Gilroy-Light.otf'

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App;
