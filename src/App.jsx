import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavMobileContextProvider } from './utils/contexts/NavMobileContext';

// Import Pages
import { Artikel, VisiMisi, HomeAdmin, Login } from './pages';

function App() {
    return (
        <BrowserRouter>
            <NavMobileContextProvider>
                <Routes>
                    <Route path="/artikel" element={<Artikel />} />
                    <Route path="/visi-misi" element={<VisiMisi />} />
                    <Route path="admin/dashboard" element={<HomeAdmin />} />
                    <Route path="admin/login" element={<Login />} />
                </Routes>
            </NavMobileContextProvider>
        </BrowserRouter>
    );
}

export default App;
