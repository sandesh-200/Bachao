import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import NotificationBell from './Alert';
import { Link } from 'react-router-dom'
import logo from '../assets/logoo.png'

const Navbar = () => {
  return (
    <div className="h-20 flex sticky top-0 items-center justify-between p-4 w-full z-50 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-sm">
      {/* Logo */}
      <Link to='/'>
      <div className=''>
    <img 
  src={logo} 
  alt="logo" 
  className='w-25'
/>
      </div>
  </Link>
      

      {/* Desktop Navigation */}
      <div className="flex gap-4 items-center">

      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="px-3 py-2 ">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="px-3 py-2 ">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-4">
              <a href="/" className="block px-4 py-2 hover:bg-gray-100">Home</a>
              <a href="/about" className="block px-4 py-2 hover:bg-gray-100">About</a>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Register Button */}
      <div className="hidden md:block">
        <Link to="/register">
        <Button className="cursor-pointer">Register</Button>
        </Link>
      </div>
      </div>
      <NotificationBell/>
    </div>
  );
};

export default Navbar;