import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useSafety } from '../../context/SafetyContext';
import { CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';

const SafetyStatus: React.FC = () => {
  const { t } = useLanguage();
  const { safetyStatus } = useSafety();
  
  const getStatusContent = () => {
    switch (safetyStatus) {
      case 'safe':
        return {
          message: t('safe'),
          icon: <CheckCircle className="mr-2 text-success-500" size={24} />,
          className: 'bg-success-50 dark:bg-success-900/20 text-success-800 dark:text-success-200 border-success-200 dark:border-success-700'
        };
      case 'warning':
        return {
          message: t('warning'),
          icon: <AlertTriangle className="mr-2 text-warning-500" size={24} />,
          className: 'bg-warning-50 dark:bg-warning-900/20 text-warning-800 dark:text-warning-200 border-warning-200 dark:border-warning-700'
        };
      case 'danger':
        return {
          message: t('danger'),
          icon: <AlertCircle className="mr-2 text-error-500" size={24} />,
          className: 'bg-error-50 dark:bg-error-900/20 text-error-800 dark:text-error-200 border-error-200 dark:border-error-700'
        };
      default:
        return {
          message: t('safe'),
          icon: <CheckCircle className="mr-2 text-success-500" size={24} />,
          className: 'bg-success-50 dark:bg-success-900/20 text-success-800 dark:text-success-200 border-success-200 dark:border-success-700'
        };
    }
  };
  
  const { message, icon, className } = getStatusContent();
  
  return (
    <div className={`flex items-center p-4 rounded-lg border ${className} transition-colors duration-300`}>
      {icon}
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default SafetyStatus;