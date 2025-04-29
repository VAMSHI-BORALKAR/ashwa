import React, { createContext, useContext, useState, useEffect } from 'react';
import { SOSStatus, SafetyStatus, SafetyZone } from '../types';
import { mockSafetyZones } from '../data/mockData';

interface SafetyContextProps {
  sosStatus: SOSStatus;
  safetyStatus: SafetyStatus;
  triggerSOS: () => void;
  deactivateSOS: () => void;
  userLocation: [number, number] | null;
  safetyZones: SafetyZone[];
  currentScenario: string | null;
  setCurrentScenario: (scenario: string | null) => void;
}

const SafetyContext = createContext<SafetyContextProps | undefined>(undefined);

export const SafetyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sosStatus, setSOSStatus] = useState<SOSStatus>('inactive');
  const [safetyStatus, setSafetyStatus] = useState<SafetyStatus>('safe');
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [safetyZones] = useState<SafetyZone[]>(mockSafetyZones);
  const [currentScenario, setCurrentScenario] = useState<string | null>(null);
  const [sirenAudio, setSirenAudio] = useState<HTMLAudioElement | null>(null);
  
  // Initialize siren audio
  useEffect(() => {
    const audio = new Audio('/sounds/siren.mp3');
    audio.loop = true;
    setSirenAudio(audio);
    
    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, []);
  
  // Watch for location changes
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
        checkSafetyZones([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error('Error getting location:', error);
        // Fallback location (Bengaluru)
        setUserLocation([12.9716, 77.5946]);
      },
      { enableHighAccuracy: true }
    );
    
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);
  
  // Check if user is in any safety zones
  const checkSafetyZones = (location: [number, number]) => {
    // Simple check if user is near an unsafe zone (for demo)
    const isInUnsafeZone = safetyZones.some(zone => {
      if (zone.type === 'unsafe') {
        // Calculate distance (very simplified)
        const lat1 = location[0];
        const lon1 = location[1];
        const lat2 = zone.coordinates[0];
        const lon2 = zone.coordinates[1];
        
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        const distance = R * c; // Distance in km
        
        return distance < (zone.radius / 1000); // Convert radius to km
      }
      return false;
    });
    
    setSafetyStatus(isInUnsafeZone ? 'danger' : 'safe');
  };
  
  const deg2rad = (deg: number) => {
    return deg * (Math.PI/180);
  };
  
  const triggerSOS = () => {
    setSOSStatus('active');
    if (sirenAudio) {
      sirenAudio.play().catch(e => console.error('Error playing siren:', e));
    }
    
    // Send SOS alert (simulated)
    if (userLocation) {
      console.log('SOS alert sent with location:', userLocation);
      // In a real app, this would send the alert to the server
    }
  };
  
  const deactivateSOS = () => {
    setSOSStatus('resolved');
    if (sirenAudio) {
      sirenAudio.pause();
      sirenAudio.currentTime = 0;
    }
  };
  
  return (
    <SafetyContext.Provider 
      value={{ 
        sosStatus, 
        safetyStatus, 
        triggerSOS, 
        deactivateSOS, 
        userLocation, 
        safetyZones,
        currentScenario,
        setCurrentScenario
      }}
    >
      {children}
    </SafetyContext.Provider>
  );
};

export const useSafety = (): SafetyContextProps => {
  const context = useContext(SafetyContext);
  if (context === undefined) {
    throw new Error('useSafety must be used within a SafetyProvider');
  }
  return context;
};