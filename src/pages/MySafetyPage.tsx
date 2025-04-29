import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SafetyStatus from '../components/safety/SafetyStatus';
import LocationMap from '../components/map/LocationMap';
import EvidenceUpload from '../components/evidence/EvidenceUpload';
import { MapPin, Shield, Camera, History } from 'lucide-react';

const MySafetyPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-6">
        {t('mySafety')}
      </h1>
      
      <div className="mb-6">
        <SafetyStatus />
      </div>
      
      <div className="mb-6">
        <LocationMap />
      </div>
      
      <div className="mb-6">
        <EvidenceUpload />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
          <div className="flex items-center mb-3">
            <MapPin size={20} className="mr-2 text-secondary-500" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('trackSafetyZones')}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            {t('safeZones')} & {t('unsafeZones')}
          </p>
        </div>
        
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
          <div className="flex items-center mb-3">
            <History size={20} className="mr-2 text-accent-500" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('evidenceHistory')}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            {t('loading')}
          </p>
        </div>
      </div>
      
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300 mb-6">
        <div className="flex items-center mb-3">
          <Shield size={20} className="mr-2 text-success-500" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t('safetyTips')}
          </h2>
        </div>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>Stay in well-lit areas at night</li>
          <li>Share your location with trusted contacts</li>
          <li>Be aware of your surroundings</li>
          <li>Trust your instincts</li>
        </ul>
      </div>
    </div>
  );
};

export default MySafetyPage;