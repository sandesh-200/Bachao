import { useEffect } from 'react';
import { toast } from 'sonner';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const DisasterAlert = () => {
  useEffect(() => {
    socket.on('newDisaster', (disaster) => {
      toast.warning(`New Disaster Alert!`, {
        description: `A ${disaster.type} disaster has been reported in ${disaster.location} with ${disaster.severity} severity.`,
        duration: 10000,
      });
    });

    return () => {
      socket.off('newDisaster');
    };
  }, []);

  return null; // This component doesn't render anything
};

export default DisasterAlert;
