import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Home, Shield, Users, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <footer className="bottom-tabs border-t border-gray-200 dark:border-gray-700 py-2 px-4 transition-colors duration-300">
      <div className="grid grid-cols-4 gap-2">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center pt-2 pb-1 px-1 rounded-md transition-colors ${
            isActive('/') 
              ? 'text-primary-600 dark:text-primary-400' 
              : 'text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-300'
          }`}
        >
          <Home size={20} />
          <span className="text-xs mt-1">{t('home')}</span>
        </Link>
        
        <Link 
          to="/my-safety" 
          className={`flex flex-col items-center justify-center pt-2 pb-1 px-1 rounded-md transition-colors ${
            isActive('/my-safety') 
              ? 'text-primary-600 dark:text-primary-400' 
              : 'text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-300'
          }`}
        >
          <Shield size={20} />
          <span className="text-xs mt-1">{t('mySafety')}</span>
        </Link>
        
        <Link 
          to="/community" 
          className={`flex flex-col items-center justify-center pt-2 pb-1 px-1 rounded-md transition-colors ${
            isActive('/community') 
              ? 'text-primary-600 dark:text-primary-400' 
              : 'text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-300'
          }`}
        >
          <Users size={20} />
          <span className="text-xs mt-1">{t('community')}</span>
        </Link>
        
        <Link 
          to="/profile" 
          className={`flex flex-col items-center justify-center pt-2 pb-1 px-1 rounded-md transition-colors ${
            isActive('/profile') 
              ? 'text-primary-600 dark:text-primary-400' 
              : 'text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-300'
          }`}
        >
          <User size={20} />
          <span className="text-xs mt-1">{t('profile')}</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;