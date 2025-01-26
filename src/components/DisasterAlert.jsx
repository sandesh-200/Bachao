import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { io } from 'socket.io-client';
import NotificationPopover from './Notification';
import { AlertTriangle, X } from 'lucide-react';

const SOCKET_URL = 'http://localhost:5000';

const DisasterAlert = () => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem('notifications');
    return saved ? JSON.parse(saved) : [];
  });
  const [currentDisaster, setCurrentDisaster] = useState(null);

  const addNotification = (disaster) => {
    const message = `EMERGENCY: ${disaster.type} disaster reported in ${disaster.location}
Severity: ${disaster.severity}
Description: ${disaster.description}
Affected Areas: ${disaster.affectedAreas?.join(', ')}
Status: ${disaster.status}`;

    const newNotification = {
      id: Date.now(),
      message,
      time: new Date().toLocaleString(),
      read: false,
      type: 'disaster',
      severity: disaster.severity,
      location: disaster.location,
      disasterType: disaster.type,
      description: disaster.description,
      affectedAreas: disaster.affectedAreas,
      coordinates: disaster.coordinates,
      casualties: disaster.casualties,
      resourcesNeeded: disaster.resourcesNeeded,
      status: disaster.status,
      reportedBy: disaster.reportedBy
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
        newSocket.connect();
      }
      toast.warning('Disconnected from alert system');
    });

    newSocket.on('newDisaster', (data) => {
      console.log('DisasterAlert: Received disaster notification:', data);
      const notification = addNotification(data);
      setCurrentDisaster(data);
      toast.error(notification.message, {
        duration: 10000,
      });
    });

    setSocket(newSocket);

    return () => {
      if (newSocket) {
        console.log('DisasterAlert: Cleaning up socket connection');
        newSocket.close();
      }
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  const getSeverityColor = (severity) => {
    switch (severity?.toLowerCase()) {
      case 'high':
        return 'bg-red-600';
      case 'medium':
        return 'bg-orange-500';
      case 'low':
        return 'bg-yellow-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div>
      {currentDisaster && (
        <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-3xl z-50 rounded-lg shadow-lg ${getSeverityColor(currentDisaster.severity)} text-white p-4`}>
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 mt-1" />
              <div>
                <div className="font-bold text-lg mb-1">
                  Emergency Alert: {currentDisaster.type} in {currentDisaster.location}
                </div>
                <div className="space-y-1">
                  <p><strong>Severity:</strong> {currentDisaster.severity}</p>
                  <p><strong>Description:</strong> {currentDisaster.description}</p>
                  <p><strong>Affected Areas:</strong> {currentDisaster.affectedAreas?.join(', ')}</p>
                  {currentDisaster.casualties && (
                    <p>
                      <strong>Casualties:</strong> {currentDisaster.casualties.injured} injured, 
                      {currentDisaster.casualties.missing} missing, 
                      {currentDisaster.casualties.deceased} deceased
                    </p>
                  )}
                  {currentDisaster.resourcesNeeded && (
                    <p><strong>Resources Needed:</strong> {currentDisaster.resourcesNeeded.join(', ')}</p>
                  )}
                  <p className="text-sm">
                    <strong>Reported By:</strong> {currentDisaster.reportedBy?.name} ({currentDisaster.reportedBy?.contact})
                  </p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setCurrentDisaster(null)}
              className="text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
      <NotificationPopover 
        notifications={notifications} 
        setNotifications={setNotifications}
        isConnected={isConnected}
      />
    </div>
  );
};

export default DisasterAlert;
