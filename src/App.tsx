import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { SafetyProvider } from './context/SafetyContext';
import PageContainer from './components/layout/PageContainer';
import HomePage from './pages/HomePage';
import MySafetyPage from './pages/MySafetyPage';
import CommunityPage from './pages/CommunityPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SafetyProvider>
          <Router>
            <PageContainer>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/my-safety" element={<MySafetyPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </PageContainer>
          </Router>
        </SafetyProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;