import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useSafety } from '../../context/SafetyContext';
import { mockCrimeScenarios } from '../../data/mockData';
import { AlertTriangle, X } from 'lucide-react';

const ScenarioSelector: React.FC = () => {
  const { t } = useLanguage();
  const { currentScenario, setCurrentScenario } = useSafety();
  const [showSelector, setShowSelector] = useState(false);
  
  const startScenario = (scenarioId: string) => {
    setCurrentScenario(scenarioId);
    setShowSelector(false);
  };
  
  const endScenario = () => {
    setCurrentScenario(null);
  };
  
  if (currentScenario) {
    const scenario = mockCrimeScenarios.find(s => s.id === currentScenario);
    if (!scenario) return null;
    
    return (
      <div className="fixed bottom-20 left-4 right-4 p-4 bg-warning-50 dark:bg-warning-900/20 border border-warning-200 dark:border-warning-800 rounded-lg shadow-lg z-20">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <AlertTriangle size={20} className="text-warning-600 dark:text-warning-400 mr-2" />
            <h3 className="font-semibold text-warning-800 dark:text-warning-200">
              {t('crimeScenarios')}: {scenario.name}
            </h3>
          </div>
          <button 
            onClick={endScenario}
            className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
          {scenario.instructions}
        </p>
        <button
          onClick={endScenario}
          className="px-3 py-1.5 bg-warning-600 text-white text-sm rounded hover:bg-warning-700 transition-colors"
        >
          {t('endDemo')}
        </button>
      </div>
    );
  }
  
  return (
    <>
      <button
        onClick={() => setShowSelector(!showSelector)}
        className="fixed bottom-20 right-4 p-2 bg-warning-500 text-white rounded-full shadow-lg z-20 hover:bg-warning-600 transition-colors"
        aria-label="Demo Scenarios"
      >
        <AlertTriangle size={24} />
      </button>
      
      {showSelector && (
        <div className="fixed bottom-20 left-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20 border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {t('crimeScenarios')}
            </h3>
            <button 
              onClick={() => setShowSelector(false)}
              className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mb-2">
            {mockCrimeScenarios.map(scenario => (
              <button
                key={scenario.id}
                onClick={() => startScenario(scenario.id)}
                className="p-3 text-left border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                  {scenario.name}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {scenario.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ScenarioSelector;