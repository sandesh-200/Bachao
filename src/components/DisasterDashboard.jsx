import React, { useState, useEffect } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { MapPin, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

const dummyLocations = [
  {
    name: "Mumbai City Center",
    status: "critical",
    description: "Severe flooding across multiple districts. Immediate evacuation needed.",
    coordinates: [19.0760, 72.8777]
  },
  {
    name: "Chennai Coastal Area",
    status: "warning", 
    description: "High tide warning. Potential storm surge expected.",
    coordinates: [13.0827, 80.2707]
  },
  {
    name: "Bangalore Tech Hub",
    status: "normal",
    description: "No immediate disaster risks. Normal conditions.",
    coordinates: [12.9716, 77.5946]
  },
  {
    name: "Delhi NCR Region",
    status: "warning",
    description: "Air quality deteriorating. Possible environmental hazard.",
    coordinates: [28.6139, 77.2090]
  }
];

const DisasterDashboard = () => {
  const [selectedLocation, setSelectedLocation] = useState(dummyLocations[0]);
  const [carouselApi, setCarouselApi] = useState(null);

  const handleSlideChange = (api) => {
    if (!api) return;
    const currentIndex = api.selectedScrollSnap();
    setSelectedLocation(dummyLocations[currentIndex]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselApi) {
        const nextIndex = (carouselApi.selectedScrollSnap() + 1) % dummyLocations.length;
        carouselApi.scrollTo(nextIndex);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselApi]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'warning': return 'bg-yellow-100 border-yellow-500 text-yellow-800';
      case 'critical': return 'bg-red-100 border-red-500 text-red-800';
      case 'normal': return 'bg-green-100 border-green-500 text-green-800';
      default: return 'bg-blue-100 border-blue-500 text-blue-800';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'warning': return <AlertTriangle color="orange" />;
      case 'critical': return <AlertTriangle color="red" />;
      case 'normal': return <CheckCircle2 color="green" />;
      default: return <Info color="blue" />;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4 h-[500px] justify-center items-center">
      <div className="flex flex-col h-full">
        <Carousel 
          className="w-full flex-grow justify-center items-center" 
          opts={{ align: "start" }}
          setApi={setCarouselApi}
          onSlideChange={handleSlideChange}
        >
          <CarouselContent>
            {dummyLocations.map((location, index) => (
              <CarouselItem key={index} className="h-full">
                <div className={`p-4 border rounded h-full flex flex-col ${getStatusColor(location.status)}`}>
                  <div className="flex items-center mb-2">
                    {getStatusIcon(location.status)}
                    <h3 className="ml-2 font-bold">{location.name}</h3>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <MapPin />
                    <Badge variant="outline">{location.status.toUpperCase()}</Badge>
                  </div>
                  <p className="flex-grow">{location.description}</p>
                  <div className="mt-2 text-sm text-gray-600">
                    Coordinates: {location.coordinates[0]}, {location.coordinates[1]}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-between mt-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
      <div className="h-full">
        <iframe
          key={`${selectedLocation.coordinates[0]}-${selectedLocation.coordinates[1]}`}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={`https://maps.google.com/maps?q=${selectedLocation.coordinates[0]},${selectedLocation.coordinates[1]}&z=15&output=embed`}
        />
      </div>
    </div>
  );
};

export default DisasterDashboard;