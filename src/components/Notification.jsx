import React, { useState, useEffect } from 'react';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Bell, CheckCircle } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const NotificationPopover = () => {
  const [notificationsList, setNotificationsList] = useState(() => {
    const savedNotifications = localStorage.getItem('notifications');
    return savedNotifications 
      ? JSON.parse(savedNotifications) 
      : [];
  });

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notificationsList));
  }, [notificationsList]);

  const addNotification = (message) => {
    const newNotification = {
      id: Date.now(), // unique id
      message,
      time: new Date().toLocaleString(),
      read: false
    };
    setNotificationsList(prevNotifications => [
      newNotification, 
      ...prevNotifications
    ]);
  };

  const markAllAsRead = () => {
    setNotificationsList(prevNotifications => 
      prevNotifications.map(notification => ({
        ...notification, 
        read: true
      }))
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative cursor-pointer">
          <Bell className="h-5 w-5" />
          {notificationsList.some(n => !n.read) && (
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 bg-white text-black border-0">
        <div className="p-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold">Notifications</h3>
          {notificationsList.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={markAllAsRead}
              className='cursor-pointer'
            >
              Mark all as read
            </Button>
          )}
        </div>
        <ScrollArea className="h-64">
          <div className="p-2">
            {notificationsList.length === 0 ? (
              <div className="text-center text-gray-500 py-4">
                No notifications
              </div>
            ) : (
              notificationsList
                .sort((a, b) => Number(a.read) - Number(b.read))
                .map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-3 border-b last:border-b-0 ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm">{notification.message}</p>
                        <p className="text-xs text-black">{notification.time}</p>
                      </div>
                      {!notification.read && (
                        <div className="h-2 w-2 bg-blue-500 rounded-full" />
                      )}
                    </div>
                  </div>
                ))
            )}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopover;