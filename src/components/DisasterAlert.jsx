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
      transports: ['websocket', 'polling'],
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: Infinity,
      timeout: 20000,
      autoConnect: true
    });

    newSocket.on('connect', () => {
      console.log('DisasterAlert: Socket connected successfully');
      setIsConnected(true);
      toast.success('Connected to disaster alert system');
    });

    newSocket.on('connect_error', (error) => {
      console.error('DisasterAlert: Connection error:', error);
      setIsConnected(false);
      toast.error('Failed to connect to alert system. Retrying...');
    });

    newSocket.on('disconnect', (reason) => {
      console.log('DisasterAlert: Socket disconnected:', reason);
      setIsConnected(false);
      if (reason === 'io server disconnect') {
        // the disconnection was initiated by the server, reconnect manually
        newSocket.connect();
      }
      toast.warning('Disconnected from alert system');
    });

    newSocket.on('disaster', (data) => {
      console.log('DisasterAlert: Received disaster notification:', data);
      const notification = addNotification(data);
      toast.error(notification.message, {
        duration: 10000,
      });
    });

    setSocket(newSocket);

    // Cleanup on unmount
    return () => {
      if (newSocket) {
        console.log('DisasterAlert: Cleaning up socket connection');
        newSocket.close();
      }
    };
  }, []); // Empty dependency array - only run once on mount

  // Save notifications to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  return (
    <div>
      <NotificationPopover 
        notifications={notifications} 
        setNotifications={setNotifications}
        isConnected={isConnected}
      />
    </div>
  );
};

export default DisasterAlert;
