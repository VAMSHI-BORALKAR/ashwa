import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SOSButton from '../components/safety/SOSButton';
import SafetyStatus from '../components/safety/SafetyStatus';
import LocationMap from '../components/map/LocationMap';
import LanguageSwitcher from '../components/language/LanguageSwitcher';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-center text-primary-600 dark:text-primary-400 mb-2">
          {t('appName')}
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400">
          {t('appTagline')}
        </p>
      </div>
      
      <div className="mb-6">
        <LanguageSwitcher />
      </div>
      
      <div className="mb-6">
        <SafetyStatus />
      </div>
      
      <div className="mb-6">
        <SOSButton />
      </div>
      
      <div className="mb-6">
        <LocationMap />
      </div>
    </div>
  );
};

export default HomePage;