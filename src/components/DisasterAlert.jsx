import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:5000';

const DisasterAlert = () => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    console.log('DisasterAlert: Initializing socket connection...');
    
    const newSocket = io(SOCKET_URL, {
      transports: ['websocket'],
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5
    });

    newSocket.on('connect', () => {
      console.log('DisasterAlert: Socket connected successfully');
      setIsConnected(true);
      toast.success('Connected to disaster alert system', {
        duration: 3000
      });
    });

    newSocket.on('disconnect', () => {
      console.log('DisasterAlert: Socket disconnected');
      setIsConnected(false);
      toast.error('Disconnected from disaster alert system', {
        duration: 3000
      });
    });

    newSocket.on('connect_error', (error) => {
      console.error('DisasterAlert: Connection error:', error);
      setIsConnected(false);
      toast.error(`Connection error: ${error.message}`, {
        duration: 3000
      });
    });

    newSocket.on('newDisaster', (disaster) => {
      console.log('DisasterAlert: New disaster received:', disaster);
      toast.warning('New Disaster Alert!', {
        description: `A ${disaster.type} disaster has been reported in ${disaster.location} with ${disaster.severity} severity.`,
        duration: 10000,
        closeButton: true,
      });
    });

    setSocket(newSocket);

    // Cleanup function
    return () => {
      console.log('DisasterAlert: Cleaning up socket connection...');
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []); // Empty dependency array = run once on mount

  // You can use this for debugging
  useEffect(() => {
    console.log('DisasterAlert: Connection status:', isConnected);
  }, [isConnected]);

  return null;
};

export default DisasterAlert;
