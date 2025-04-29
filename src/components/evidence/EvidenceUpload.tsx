import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Camera, Mic, Video } from 'lucide-react';

const EvidenceUpload: React.FC = () => {
  const { t } = useLanguage();
  const [uploadType, setUploadType] = useState<'photo' | 'audio' | 'video' | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  
  const handleUpload = (type: 'photo' | 'audio' | 'video') => {
    setUploadType(type);
  };
  
  const fileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      // Simulate upload
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
        setUploadSuccess(true);
        
        // Reset after a few seconds
        setTimeout(() => {
          setUploadSuccess(false);
          setUploadType(null);
        }, 3000);
      }, 2000);
    }
  };
  
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        {t('evidenceUpload')}
      </h2>
      
      {uploadSuccess ? (
        <div className="bg-success-50 dark:bg-success-900/20 text-success-800 dark:text-success-200 p-3 rounded-lg text-center">
          {t('uploadSuccess')}
        </div>
      ) : isUploading ? (
        <div className="text-center p-4">
          <div className="animate-pulse text-primary-500">{t('loading')}</div>
        </div>
      ) : uploadType ? (
        <div className="text-center">
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            {uploadType === 'photo' ? t('uploadPhoto') : 
             uploadType === 'audio' ? t('recordAudio') : t('recordVideo')}
          </p>
          <div className="evidence-upload-button">
            <label className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg cursor-pointer inline-block transition-colors">
              {t('uploadEvidence')}
              <input 
                type="file" 
                accept={
                  uploadType === 'photo' ? 'image/*' : 
                  uploadType === 'audio' ? 'audio/*' : 'video/*'
                }
                capture={uploadType !== 'photo' ? true : undefined}
                onChange={fileInputChange}
              />
            </label>
          </div>
          <button
            onClick={() => setUploadType(null)}
            className="mt-3 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            {t('cancel')}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => handleUpload('photo')}
            className="p-3 flex flex-col items-center justify-center bg-secondary-50 dark:bg-secondary-900/20 text-secondary-800 dark:text-secondary-200 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800/30 transition-colors"
          >
            <Camera size={24} className="mb-1" />
            <span className="text-sm">{t('uploadPhoto')}</span>
          </button>
          
          <button
            onClick={() => handleUpload('audio')}
            className="p-3 flex flex-col items-center justify-center bg-accent-50 dark:bg-accent-900/20 text-accent-800 dark:text-accent-200 rounded-lg hover:bg-accent-100 dark:hover:bg-accent-800/30 transition-colors"
          >
            <Mic size={24} className="mb-1" />
            <span className="text-sm">{t('recordAudio')}</span>
          </button>
          
          <button
            onClick={() => handleUpload('video')}
            className="p-3 flex flex-col items-center justify-center bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-200 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-800/30 transition-colors"
          >
            <Video size={24} className="mb-1" />
            <span className="text-sm">{t('recordVideo')}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default EvidenceUpload;