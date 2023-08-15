import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavMobileContextProvider } from './utils/contexts/NavMobileContext';

// Import Pages
import { Artikel, VisiMisi, HomeAdmin, Login, DetailArtikel, Home, Statistik,Perangkat, Almaliki, NurulAnwar, NotFound, ServerError } from './pages';

function App() {
    return (
        <BrowserRouter>
            <NavMobileContextProvider>
                <Routes>
                    <Route path="/artikel" element={<Artikel />} />
                    <Route path="/visi-misi" element={<VisiMisi />} />
                    <Route path="admin/dashboard" element={<HomeAdmin />} />
                    <Route path="admin/login" element={<Login />} />
                    <Route path="/detail" element={<DetailArtikel />} />
                    <Route path="" element={<Home />} />
                    <Route path="/statistik" element={<Statistik />} />
                    <Route path="/Perangkat" element={<Perangkat />} />
                    <Route path="/Al-Maliki" element={<Almaliki />} />
                    <Route path="/Nurul Anwar" element={<NurulAnwar />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="/500" element={<ServerError />} />
                </Routes>
            </NavMobileContextProvider>
        </BrowserRouter>
    );
}

export default App;
