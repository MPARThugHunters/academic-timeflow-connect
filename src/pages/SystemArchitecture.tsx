
import React from 'react';
import SystemFlowchart from '@/components/SystemFlowchart';

const SystemArchitecture = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        TimeTable Management System Architecture
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <SystemFlowchart />
      </div>
    </div>
  );
};

export default SystemArchitecture;
