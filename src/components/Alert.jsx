import React, { useState } from 'react';
import { Bell, BellDot } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (newNotification) => {
    setNotifications(prev => {
      const updatedNotifications = [...prev, newNotification];
      return updatedNotifications.slice(-9);
    });
  };

  return (
    <Popover>
      <PopoverTrigger className="relative hidden">
        {notifications.length > 0 ? (
          <div className="relative">
            <BellDot color="blue" size={24} />
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 px-1 py-0 text-xs"
            >
              {notifications.length === 9 ? '9+' : notifications.length}
            </Badge>
          </div>
        ) : (
          <Bell color="gray" size={24} />
        )}
      </PopoverTrigger>
      <PopoverContent>
        {notifications.length === 0 ? (
          <div>No notifications</div>
        ) : (
          notifications.map((notification, index) => (
            <div key={index} className="mb-2 p-2 bg-white rounded">
              {notification.message}
            </div>
          ))
        )}
      </PopoverContent>
    </Popover>
  );
};

export default NotificationBell;