import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { io } from 'socket.io-client';
import NotificationPopover from './Notification';

const SOCKET_URL = 'http://localhost:5000';

const DisasterAlert = () => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem('notifications');
    return saved ? JSON.parse(saved) : [];
  });

  const addNotification = (disaster) => {
    const message = `A ${disaster.type} disaster has been reported in ${disaster.location} with ${disaster.severity} severity.`;
    const newNotification = {
      id: Date.now(),
      message,
      time: new Date().toLocaleString(),
      read: false,
      type: 'disaster',
      severity: disaster.severity,
      location: disaster.location,
      disasterType: disaster.type
    };
    setNotifications(prev => [newNotification, ...prev]);
    return newNotification;
  };

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
      
      // Add to notifications
      const notification = addNotification(disaster);
      
      // Show toast
      toast.warning('New Disaster Alert!', {
        description: notification.message,
        duration: 10000,
        closeButton: true,
      });
    });

    setSocket(newSocket);

    return () => {
      console.log('DisasterAlert: Cleaning up socket connection...');
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []);

  // Save notifications to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  return (
    <div className="inline-block">
      <NotificationPopover 
        notifications={notifications} 
        setNotifications={setNotifications}
      />
    </div>
  );
};

export default DisasterAlert;
