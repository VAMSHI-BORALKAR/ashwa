import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import RespondersNearby from '../components/community/RespondersNearby';
import { Users, Bell, Clipboard, Award } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-6">
        {t('community')}
      </h1>
      
      <div className="mb-6">
        <RespondersNearby />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
          <div className="flex items-center mb-3">
            <Bell size={20} className="mr-2 text-warning-500" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('communityAlerts')}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            {t('loading')}
          </p>
        </div>
        
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
          <div className="flex items-center mb-3">
            <Clipboard size={20} className="mr-2 text-error-500" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('reportIncident')}
            </h2>
          </div>
          <button className="w-full px-4 py-2 bg-error-500 text-white rounded-lg hover:bg-error-600 transition-colors">
            {t('reportIncident')}
          </button>
        </div>
      </div>
      
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300 mb-6">
        <div className="flex items-center mb-3">
          <Users size={20} className="mr-2 text-secondary-500" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t('volunteerSignup')}
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          Help your community by becoming a volunteer responder.
        </p>
        <button className="px-4 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors">
          {t('volunteerSignup')}
        </button>
      </div>
      
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
        <div className="flex items-center mb-3">
          <Award size={20} className="mr-2 text-accent-500" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t('rewardSystem')}
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Coming soon! Earn rewards for helping others in need.
        </p>
      </div>
    </div>
  );
};

export default CommunityPage;