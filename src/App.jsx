import './App.css';
// import NavbarMoblie from './components/Navbar_Mobile';
import Navbar from './components/Navbar';
import Footer from './components/footer/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Pages
import { Artikel } from './pages';

function App() {
    return (
        <BrowserRouter>
            {/* <NavbarMoblie/> */}
            <Navbar />
            <Footer />
            <Routes>
                <Route path="/artikel" element={<Artikel />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
