import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Books from './pages/masters/Books';


function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={
                    <div>
                        <TopNavbar />
                        <SideNavbar onToggle={setSidebarOpen} />
                        <div
                            style={{
                                marginLeft: sidebarOpen ? '220px' : '0px', // 220px es el ancho de la sidebar
                                marginTop: '60px',
                                padding: '20px',
                                transition: 'margin-left 0.3s ease'
                            }}
                        >
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/books" element={<Books />} />

                            </Routes>
                        </div>
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;