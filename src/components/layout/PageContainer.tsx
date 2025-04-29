import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="flex-grow page-container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageContainer;