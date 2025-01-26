import React from 'react';
import { Phone, Ambulance, Building2, FileText, ShieldAlert, Heart, BookOpen, MapPin } from 'lucide-react';

const Resources = () => {
  const emergencyContacts = [
    { icon: <Phone className="w-6 h-6" />, name: 'Police Control', number: '100' },
    { icon: <Ambulance className="w-6 h-6" />, name: 'Ambulance', number: '102' },
    { icon: <Building2 className="w-6 h-6" />, name: 'Fire Brigade', number: '101' },
    { icon: <ShieldAlert className="w-6 h-6" />, name: 'Disaster Management', number: '1122' },
  ];

  const guidelines = [
    {
      title: 'Earthquake Safety',
      icon: <MapPin className="w-6 h-6" />,
      steps: [
        'Drop, Cover, and Hold On',
        'Stay away from windows and exterior walls',
        'If indoors, stay inside until shaking stops',
        'If outdoors, move to a clear area away from buildings',
        'Be prepared for aftershocks'
      ]
    },
    {
      title: 'Flood Safety',
      icon: <FileText className="w-6 h-6" />,
      steps: [
        'Move to higher ground immediately',
        'Avoid walking or driving through flood waters',
        'Keep emergency supplies ready',
        'Listen to official instructions',
        'Protect important documents'
      ]
    },
    {
      title: 'Fire Safety',
      icon: <ShieldAlert className="w-6 h-6" />,
      steps: [
        'Call fire brigade immediately',
        'Use fire extinguisher if safe',
        'Stay low to avoid smoke',
        'Follow evacuation routes',
        'Never use elevators during a fire'
      ]
    }
  ];

  const usefulLinks = [
    {
      title: 'Nepal Red Cross',
      icon: <Heart className="w-6 h-6" />,
      url: 'https://nrcs.org/',
      description: 'Official website of Nepal Red Cross Society'
    },
    {
      title: 'Disaster Portal',
      icon: <BookOpen className="w-6 h-6" />,
      url: 'http://drrportal.gov.np/',
      description: 'Government Disaster Risk Reduction Portal'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Emergency Contacts Section */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Emergency Resources
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
              >
                <div className="text-blue-600">{contact.icon}</div>
                <div>
                  <p className="font-medium text-gray-900">{contact.name}</p>
                  <p className="text-xl font-bold text-blue-600">{contact.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Guidelines Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Safety Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidelines.map((guideline, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-blue-600">{guideline.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {guideline.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {guideline.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Useful Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {usefulLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="text-blue-600">{link.icon}</div>
                <div>
                  <h3 className="font-medium text-gray-900">{link.title}</h3>
                  <p className="text-gray-600">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;