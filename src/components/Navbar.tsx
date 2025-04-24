
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  userName: string;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ userName, onLogout }) => {
  const navigate = useNavigate();
  
  return (
    <nav className="bg-academic-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 
            onClick={() => navigate('/')}
            className="text-2xl font-bold cursor-pointer"
          >
            TimeTable Manager
          </h1>
          <span className="hidden md:inline-block text-sm py-1 px-3 bg-white/20 rounded-full">
            Welcome, {userName}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="bg-white text-academic-primary hover:bg-gray-100"
            onClick={onLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
