import { 
  User, 
  EmergencyContact, 
  SafetyZone, 
  NearbyResponder,
  CrimeScenario 
} from '../types';

// Mock user data
export const mockUser: User = {
  id: '1',
  name: 'Ananya Sharma',
  phone: '+91 9876543210',
  emergencyContacts: [
    {
      id: '1',
      name: 'Rajesh Sharma',
      phone: '+91 9876543211',
      relationship: 'Father'
    },
    {
      id: '2',
      name: 'Priya Sharma',
      phone: '+91 9876543212',
      relationship: 'Sister'
    }
  ],
  preferredLanguage: 'en'
};

// Mock safety zones
export const mockSafetyZones: SafetyZone[] = [
  {
    id: '1',
    name: 'Bengaluru Police Station',
    type: 'safe',
    coordinates: [12.9767, 77.5713],
    radius: 500 // meters
  },
  {
    id: '2',
    name: 'City Market',
    type: 'safe',
    coordinates: [12.9667, 77.5766],
    radius: 300
  },
  {
    id: '3',
    name: 'Isolated Street',
    type: 'unsafe',
    coordinates: [12.9716, 77.5849],
    radius: 400
  },
  {
    id: '4',
    name: 'Dark Alley',
    type: 'unsafe',
    coordinates: [12.9786, 77.5896],
    radius: 200
  }
];

// Mock nearby responders
export const mockResponders: NearbyResponder[] = [
  {
    id: '1',
    name: 'Officer Ramesh',
    type: 'police',
    distance: 1.2,
    estimatedArrival: 5,
    coordinates: [12.9797, 77.5906]
  },
  {
    id: '2',
    name: 'Dr. Kavitha',
    type: 'medical',
    distance: 2.5,
    estimatedArrival: 8,
    coordinates: [12.9847, 77.5820]
  },
  {
    id: '3',
    name: 'Volunteer Suresh',
    type: 'community',
    distance: 0.8,
    estimatedArrival: 3,
    coordinates: [12.9757, 77.5866]
  },
  {
    id: '4',
    name: 'Officer Lakshmi',
    type: 'police',
    distance: 3.1,
    estimatedArrival: 10,
    coordinates: [12.9717, 77.5720]
  }
];

// Mock crime scenarios
export const mockCrimeScenarios: CrimeScenario[] = [
  {
    id: 'acid-attack',
    name: 'Acid Attack',
    description: 'Simulation of acid attack emergency response',
    instructions: 'This will simulate an acid attack emergency. The SOS will automatically trigger and notify responders.'
  },
  {
    id: 'harassment',
    name: 'Harassment',
    description: 'Simulation of harassment scenario',
    instructions: 'This will simulate a harassment scenario. You can manually trigger SOS and upload evidence.'
  },
  {
    id: 'kidnapping',
    name: 'Kidnapping',
    description: 'Simulation of kidnapping emergency',
    instructions: 'This will simulate a kidnapping attempt. Location tracking will be emphasized.'
  },
  {
    id: 'robbery',
    name: 'Robbery',
    description: 'Simulation of robbery scenario',
    instructions: 'This will simulate a robbery scenario. Evidence collection will be emphasized.'
  },
  {
    id: 'assault',
    name: 'Assault',
    description: 'Simulation of physical assault',
    instructions: 'This will simulate a physical assault scenario. Medical responders will be prioritized.'
  }
];