import React from 'react';
import Header from '../common/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../home/Home'; // Adjust path if necessary

const Pages = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default Pages;

