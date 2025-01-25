import React, { useState, useEffect } from 'react';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Bell, AlertTriangle } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const NotificationPopover = ({ notifications: externalNotifications, setNotifications: setExternalNotifications }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalNotifications, setInternalNotifications] = useState(() => {
    const saved = localStorage.getItem('notifications');
    return saved ? JSON.parse(saved) : [];
  });

  // Use either external or internal notifications
  const notifications = externalNotifications || internalNotifications;
  const setNotifications = setExternalNotifications || ((newNotifications) => {
    setInternalNotifications(newNotifications);
    localStorage.setItem('notifications', JSON.stringify(
      typeof newNotifications === 'function' 
        ? newNotifications(internalNotifications)
        : newNotifications
    ));
  });

  const markAsRead = (notificationId) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (notificationId) => {
    setNotifications(prevNotifications =>
      prevNotifications.filter(notification => notification.id !== notificationId)
    );
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const getSeverityColor = (severity) => {
    switch (severity?.toLowerCase()) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-blue-500';
    }
  };

  const getNotificationIcon = (type, severity) => {
    if (type === 'disaster') {
      return <AlertTriangle className={`h-4 w-4 ${getSeverityColor(severity)}`} />;
    }
    return <Bell className="h-4 w-4 text-blue-500" />;
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative text-white hover:text-gray-300"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 bg-white rounded-md shadow-lg" align="end">
        <div className="flex items-center justify-between p-3 border-b border-gray-200">
          <h4 className="font-semibold text-gray-900">Notifications</h4>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={markAllAsRead}
              disabled={unreadCount === 0}
              className="text-sm hover:bg-gray-100"
            >
              Mark all read
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={clearAllNotifications}
              disabled={notifications.length === 0}
              className="text-sm hover:bg-gray-100"
            >
              Clear all
            </Button>
          </div>
        </div>
        <ScrollArea className="h-[300px]">
          {notifications.length === 0 ? (
            <div className="flex items-center justify-center h-[100px] text-gray-500">
              No notifications
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 ${
                    notification.read ? 'bg-white' : 'bg-blue-50'
                  } hover:bg-gray-50 transition-colors`}
                >
                  <div className="flex items-start gap-3">
                    {getNotificationIcon(notification.type, notification.severity)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 break-words">{notification.message}</p>
                      <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
                        <span>{notification.time}</span>
                        <div className="flex gap-3">
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="text-blue-500 hover:text-blue-700"
                            >
                              Mark read
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};

NotificationPopover.defaultProps = {
  notifications: [],
  setNotifications: () => {}
};

export default NotificationPopover;