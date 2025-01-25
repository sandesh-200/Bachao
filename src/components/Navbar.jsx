import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import NotificationBell from './Alert';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
      {/* Logo */}
      <div>
        <img 
          src="vite.svg" 
          alt="logo" 
          className="h-8 w-8"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="px-3 py-2">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="px-3 py-2">
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
        <Button>Register</Button>
      </div>
      <NotificationBell/>
    </nav>
  );
};

export default Navbar;