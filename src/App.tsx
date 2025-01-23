import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Journal } from './pages/Journal';
import { SocialLinks } from './components/SocialLinks';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<Journal />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SocialLinks></SocialLinks>
    </Router>
  );
}