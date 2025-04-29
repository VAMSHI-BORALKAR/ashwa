import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import LanguageSwitcher from '../components/language/LanguageSwitcher';
import { mockUser } from '../data/mockData';
import { User, Phone, Users, Bell, LogOut, Moon, Sun } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [user] = useState(mockUser);
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-6">
        {t('profile')}
      </h1>
      
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300 mb-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
            <User size={32} className="text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {user.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 flex items-center">
              <Phone size={16} className="mr-1" /> {user.phone}
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300 mb-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
          <Users size={20} className="mr-2 text-secondary-500" />
          {t('emergencyContacts')}
        </h2>
        
        <div className="space-y-3">
          {user.emergencyContacts.map(contact => (
            <div 
              key={contact.id} 
              className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">{contact.name}</h3>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  {contact.phone}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {contact.relationship}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <button className="mt-4 w-full px-4 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors">
          {t('addEmergencyContact')}
        </button>
      </div>
      
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300 mb-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          {t('language')}
        </h2>
        <LanguageSwitcher />
      </div>
      
      <div className="space-y-4">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {theme === 'light' ? (
                <Sun size={20} className="mr-2 text-warning-500" />
              ) : (
                <Moon size={20} className="mr-2 text-secondary-400" />
              )}
              <span className="text-gray-900 dark:text-white">{t('darkMode')}</span>
            </div>
            <button
              onClick={toggleTheme}
              className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none"
            >
              <span
                className={`${
                  theme === 'dark' ? 'bg-secondary-500' : 'bg-gray-300'
                } inline-block h-6 w-11 rounded-full transition-colors`}
              />
              <span
                className={`${
                  theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </button>
          </div>
        </div>
        
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
          <div className="flex items-center">
            <Bell size={20} className="mr-2 text-accent-500" />
            <span className="text-gray-900 dark:text-white">{t('notifications')}</span>
          </div>
        </div>
        
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
          <div className="flex items-center text-error-600 dark:text-error-400">
            <LogOut size={20} className="mr-2" />
            <span>{t('logout')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;