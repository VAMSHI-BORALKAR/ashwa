import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useSafety } from '../../context/SafetyContext';
import { Shield, Heart, Users } from 'lucide-react';
import { mockResponders } from '../../data/mockData';

const RespondersNearby: React.FC = () => {
  const { t } = useLanguage();
  const { sosStatus } = useSafety();
  
  // Get responder icon based on type
  const getResponderIcon = (type: string) => {
    switch (type) {
      case 'police':
        return <Shield size={20} className="text-secondary-500" />;
      case 'medical':
        return <Heart size={20} className="text-primary-500" />;
      case 'community':
        return <Users size={20} className="text-accent-500" />;
      default:
        return <Shield size={20} className="text-secondary-500" />;
    }
  };
  
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
      <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
        {t('nearbyResponders')}
      </h2>
      
      {sosStatus === 'active' ? (
        <div className="space-y-3">
          <p className="text-primary-600 dark:text-primary-400 mb-3">
            {t('sosResponders')}
          </p>
          
          {mockResponders.map(responder => (
            <div 
              key={responder.id} 
              className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div className="mr-3 p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                {getResponderIcon(responder.type)}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-white">{responder.name}</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    {responder.distance} km
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    ~{responder.estimatedArrival} min
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400">
            {t('sosResponders')}
          </p>
        </div>
      )}
    </div>
  );
};

export default RespondersNearby;