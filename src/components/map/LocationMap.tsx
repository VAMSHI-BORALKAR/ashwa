import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Circle, Popup, useMap } from 'react-leaflet';
import { useSafety } from '../../context/SafetyContext';
import { useLanguage } from '../../context/LanguageContext';
import { Icon } from 'leaflet';

// Workaround for marker icon paths
const markerIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const userIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Component to update map view when location changes
const LocationMarker: React.FC = () => {
  const { userLocation } = useSafety();
  const { t } = useLanguage();
  const map = useMap();
  
  useEffect(() => {
    if (userLocation) {
      map.setView(userLocation, 15);
    }
  }, [userLocation, map]);
  
  if (!userLocation) return null;
  
  return (
    <Marker position={userLocation} icon={userIcon}>
      <Popup>{t('myLocation')}</Popup>
    </Marker>
  );
};

const LocationMap: React.FC = () => {
  const { userLocation, safetyZones } = useSafety();
  const { t } = useLanguage();
  const [mapCenter, setMapCenter] = useState<[number, number]>([12.9716, 77.5946]); // Default: Bengaluru
  
  useEffect(() => {
    if (userLocation) {
      setMapCenter(userLocation);
    }
  }, [userLocation]);
  
  if (!userLocation) {
    return (
      <div className="h-40 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-gray-500 dark:text-gray-400">{t('loading')}</p>
      </div>
    );
  }
  
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <MapContainer center={mapCenter} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        
        {/* Safety zones */}
        {safetyZones.map(zone => (
          <Circle
            key={zone.id}
            center={zone.coordinates}
            radius={zone.radius}
            pathOptions={{
              color: zone.type === 'safe' ? '#4caf50' : '#f44336',
              fillColor: zone.type === 'safe' ? '#4caf5033' : '#f4433633',
            }}
          >
            <Popup>
              <div>
                <h3 className="font-semibold">{zone.name}</h3>
                <p className={zone.type === 'safe' ? 'text-success-600' : 'text-error-600'}>
                  {zone.type === 'safe' ? t('safeZones') : t('unsafeZones')}
                </p>
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
};

export default LocationMap;