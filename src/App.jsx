import './App.css';
// import NavbarMoblie from './components/Navbar_Mobile';
import Navbar from './components/Navbar';
import Footer from './components/footer/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import Pages
import { Artikel } from './pages';
import Home from './pages/Home';

function App() {

  return (
    <>
    {/* <NavbarMoblie/> */}
    <Navbar/>
    {/* <Home/> */}
    <Artikel/>
    </>
  )
}

export default App;
