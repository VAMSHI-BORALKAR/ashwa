export interface User {
  id: string;
  name: string;
  phone: string;
  emergencyContacts: EmergencyContact[];
  preferredLanguage: 'en' | 'kn' | 'hi';
}

export interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
  relationship: string;
}

export interface SafetyZone {
  id: string;
  name: string;
  type: 'safe' | 'unsafe';
  coordinates: [number, number];
  radius: number;
}

export interface Evidence {
  id: string;
  type: 'image' | 'audio' | 'video';
  url: string;
  timestamp: Date;
  location?: [number, number];
}

export interface NearbyResponder {
  id: string;
  name: string;
  type: 'police' | 'community' | 'medical';
  distance: number; // in kilometers
  estimatedArrival: number; // in minutes
  coordinates: [number, number];
}

export interface CrimeScenario {
  id: string;
  name: string;
  description: string;
  instructions: string;
}

export type SOSStatus = 'inactive' | 'active' | 'resolved';

export type SafetyStatus = 'safe' | 'warning' | 'danger';