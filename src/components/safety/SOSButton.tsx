import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useSafety } from '../../context/SafetyContext';
import { AlertTriangle } from 'lucide-react';

const SOSButton: React.FC = () => {
  const { t } = useLanguage();
  const { sosStatus, triggerSOS, deactivateSOS } = useSafety();
  const [showConfirm, setShowConfirm] = useState(false);
  
  const handleSOSClick = () => {
    if (sosStatus === 'inactive') {
      setShowConfirm(true);
    } else if (sosStatus === 'active') {
      deactivateSOS();
    }
  };
  
  const confirmSOS = () => {
    triggerSOS();
    setShowConfirm(false);
  };
  
  const cancelSOS = () => {
    setShowConfirm(false);
  };
  
  return (
    <div className="flex flex-col items-center justify-center py-4">
      {showConfirm ? (
        <div className="flex flex-col items-center mb-4">
          <p className="text-error-600 dark:text-error-400 font-semibold mb-3">{t('sosConfirm')}</p>
          <div className="flex space-x-4">
            <button
              onClick={confirmSOS}
              className="px-6 py-2 bg-error-600 text-white rounded-lg shadow-md hover:bg-error-700 focus:outline-none focus:ring-2 focus:ring-error-500 focus:ring-opacity-50"
            >
              {t('yes')}
            </button>
            <button
              onClick={cancelSOS}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            >
              {t('no')}
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleSOSClick}
          className={`sos-button flex items-center justify-center w-40 h-40 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all ${
            sosStatus === 'active'
              ? 'bg-error-600 text-white sos-button-pressed focus:ring-error-300'
              : 'bg-error-500 hover:bg-error-600 text-white focus:ring-error-300'
          }`}
        >
          <div className="flex flex-col items-center">
            <AlertTriangle size={36} className="mb-2" />
            <span className="text-2xl font-bold">
              {sosStatus === 'active' ? t('sosActive') : t('sosButton')}
            </span>
          </div>
        </button>
      )}
      
      {sosStatus === 'active' && (
        <div className="mt-4 text-center">
          <p className="text-xl font-semibold text-error-600 dark:text-error-400 animate-pulse">
            {t('sosHelp')}
          </p>
          <button
            onClick={deactivateSOS}
            className="mt-2 px-4 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            {t('sosDeactivate')}
          </button>
        </div>
      )}
    </div>
  );
};

export default SOSButton;