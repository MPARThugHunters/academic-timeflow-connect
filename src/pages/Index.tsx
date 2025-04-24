
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-academic-primary">
          TimeTable Management System
        </h1>
        
        <div className="space-y-4">
          <Button 
            onClick={() => navigate('/student-dashboard')}
            className="w-full"
          >
            Student Dashboard
          </Button>
          
          <Button 
            onClick={() => navigate('/teacher-dashboard')}
            className="w-full"
          >
            Teacher Dashboard
          </Button>
          
          <Button 
            onClick={() => navigate('/architecture')}
            variant="outline"
            className="w-full"
          >
            View System Architecture
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
