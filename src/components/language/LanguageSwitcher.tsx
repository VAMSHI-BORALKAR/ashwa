import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, changeLanguage, t } = useLanguage();
  
  return (
    <div className="language-switcher flex items-center space-x-2 py-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`language-option px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-secondary-500 text-white'
            : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        {t('english')}
      </button>
      <button
        onClick={() => changeLanguage('kn')}
        className={`language-option px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
          language === 'kn'
            ? 'bg-secondary-500 text-white'
            : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        {t('kannada')}
      </button>
      <button
        onClick={() => changeLanguage('hi')}
        className={`language-option px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
          language === 'hi'
            ? 'bg-secondary-500 text-white'
            : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        {t('hindi')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;