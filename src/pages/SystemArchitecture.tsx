
import React from 'react';
import SystemFlowchart from '@/components/SystemFlowchart';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SystemArchitecture = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 hover:text-academic-primary"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Button>
      </div>
      <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-academic-primary to-academic-secondary">
        TimeTable Management System Architecture
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-2xl">
        <SystemFlowchart />
      </div>
    </div>
  );
};

export default SystemArchitecture;
