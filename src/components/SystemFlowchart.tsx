
import React from 'react';
import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowDown } from 'lucide-react';

const SystemFlowchart = () => {
  return (
    <div className="w-full p-6 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-xl overflow-x-auto">
      <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-academic-primary to-academic-secondary">
        TimeTable Management System - Architecture Flowchart
      </h2>

      {/* Main flowchart container */}
      <div className="min-w-[900px] relative">
        {/* Frontend Section */}
        <div className="flex flex-col items-center">
          <Card className="w-72 p-6 text-center border-2 border-academic-primary bg-gradient-to-r from-academic-light to-white shadow-lg transform hover:scale-105 transition-transform duration-200">
            <h3 className="font-bold text-xl text-academic-primary">Frontend (React)</h3>
            <p className="text-sm mt-2 text-gray-600">User Interface & Client-side Logic</p>
          </Card>

          <div className="flex justify-center my-6">
            <ArrowDown className="text-academic-secondary animate-bounce" size={28} />
          </div>

          {/* User Authentication */}
          <div className="flex space-x-12 mb-12">
            <Card className="w-56 p-4 text-center bg-white border-2 border-academic-secondary shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-academic-secondary">Login Page</h4>
              <p className="text-xs mt-2 text-gray-600">Authentication & Authorization</p>
            </Card>
            <ArrowRight className="self-center text-academic-primary" size={28} />
            <Card className="w-56 p-4 text-center bg-white border-2 border-academic-secondary shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-academic-secondary">Role Verification</h4>
              <p className="text-xs mt-2 text-gray-600">JWT Token Validation</p>
            </Card>
          </div>

          {/* User Dashboards */}
          <div className="flex justify-center space-x-16 mb-12">
            <div className="flex flex-col items-center">
              <ArrowDown className="text-academic-primary mb-4" size={28} />
              <Card className="w-56 p-4 text-center bg-gradient-to-br from-academic-light to-white border-2 border-academic-secondary shadow-lg">
                <h4 className="font-semibold text-academic-primary">Student Dashboard</h4>
                <p className="text-xs mt-2 text-gray-600">Class Schedule View</p>
              </Card>
              <div className="flex flex-col items-center mt-6">
                <ArrowDown className="text-academic-primary mb-4" size={24} />
                <div className="flex space-x-6">
                  <Card className="w-40 p-3 text-center bg-white border border-academic-primary shadow-md">
                    <h5 className="text-sm font-semibold text-academic-secondary">Timetable</h5>
                    <p className="text-xs mt-1 text-gray-500">Department & Section</p>
                  </Card>
                  <Card className="w-40 p-3 text-center bg-white border border-academic-primary shadow-md">
                    <h5 className="text-sm font-semibold text-academic-secondary">Teacher Info</h5>
                    <p className="text-xs mt-1 text-gray-500">Contact Details</p>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <ArrowDown className="text-academic-primary mb-4" size={28} />
              <Card className="w-56 p-4 text-center bg-gradient-to-br from-academic-light to-white border-2 border-academic-secondary shadow-lg">
                <h4 className="font-semibold text-academic-primary">Teacher Dashboard</h4>
                <p className="text-xs mt-2 text-gray-600">Teaching Schedule</p>
              </Card>
              <div className="flex flex-col items-center mt-6">
                <ArrowDown className="text-academic-primary mb-4" size={24} />
                <div className="flex space-x-6">
                  <Card className="w-40 p-3 text-center bg-white border border-academic-primary shadow-md">
                    <h5 className="text-sm font-semibold text-academic-secondary">Weekly Schedule</h5>
                    <p className="text-xs mt-1 text-gray-500">Classes & Subjects</p>
                  </Card>
                  <Card className="w-40 p-3 text-center bg-white border border-academic-primary shadow-md">
                    <h5 className="text-sm font-semibold text-academic-secondary">Empty Slots</h5>
                    <p className="text-xs mt-1 text-gray-500">Available Times</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* API Connection */}
          <div className="flex my-8 items-center">
            <ArrowDown className="text-academic-primary mx-4" size={28} />
            <Card className="w-72 p-4 text-center bg-gradient-to-r from-academic-light to-white border-2 border-academic-primary shadow-lg">
              <h4 className="font-semibold text-academic-primary">API Layer</h4>
              <p className="text-xs mt-2 text-gray-600">REST API Communication</p>
            </Card>
            <ArrowDown className="text-academic-primary mx-4" size={28} />
          </div>
        </div>

        {/* Backend Section */}
        <div className="flex flex-col items-center">
          <Card className="w-72 p-6 text-center bg-gradient-to-br from-academic-secondary to-academic-dark text-white border-2 border-academic-primary shadow-lg">
            <h3 className="font-bold text-xl">Backend (Node.js/Express)</h3>
            <p className="text-sm mt-2 opacity-90">Server-side Logic & API Endpoints</p>
          </Card>
          
          <div className="flex justify-center space-x-16 my-8">
            <div className="flex flex-col items-center">
              <ArrowDown className="text-academic-primary mb-4" size={24} />
              <Card className="w-56 p-4 text-center bg-white border-2 border-academic-secondary shadow-md">
                <h4 className="font-semibold text-academic-secondary">Authentication</h4>
                <p className="text-xs mt-2 text-gray-600">JWT Token Management</p>
              </Card>
            </div>
            <div className="flex flex-col items-center">
              <ArrowDown className="text-academic-primary mb-4" size={24} />
              <Card className="w-56 p-4 text-center bg-white border-2 border-academic-secondary shadow-md">
                <h4 className="font-semibold text-academic-secondary">API Routes</h4>
                <p className="text-xs mt-2 text-gray-600">Data Management</p>
              </Card>
            </div>
          </div>
          
          {/* Database Section */}
          <div className="flex my-8 items-center">
            <ArrowDown className="text-academic-primary mx-4" size={28} />
            <Card className="w-72 p-6 text-center bg-gradient-to-br from-academic-dark to-black text-white border-2 border-academic-primary shadow-lg">
              <h3 className="font-bold text-xl">MongoDB Database</h3>
              <p className="text-sm mt-2 opacity-90">Data Storage & Retrieval</p>
            </Card>
          </div>
          
          {/* Database Models */}
          <div className="flex justify-center space-x-16">
            <Card className="w-56 p-4 text-center bg-gradient-to-br from-white to-gray-50 border-2 border-academic-dark shadow-md">
              <h4 className="font-semibold text-academic-dark">User Model</h4>
              <p className="text-xs mt-2 text-gray-600">Students & Teachers</p>
            </Card>
            <Card className="w-56 p-4 text-center bg-gradient-to-br from-white to-gray-50 border-2 border-academic-dark shadow-md">
              <h4 className="font-semibold text-academic-dark">Timetable Model</h4>
              <p className="text-xs mt-2 text-gray-600">Schedule Management</p>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="mt-12 px-6 py-4 bg-gradient-to-r from-gray-50 to-white rounded-lg shadow-inner">
        <h3 className="font-semibold text-academic-secondary mb-4">System Flow Process:</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li className="hover:text-academic-primary transition-colors">User authentication via email/password</li>
          <li className="hover:text-academic-primary transition-colors">System determines user role (student/teacher)</li>
          <li className="hover:text-academic-primary transition-colors">Role-based dashboard access</li>
          <li className="hover:text-academic-primary transition-colors">API fetches relevant timetable data</li>
          <li className="hover:text-academic-primary transition-colors">Students view filtered schedules</li>
          <li className="hover:text-academic-primary transition-colors">Teachers manage teaching schedules</li>
        </ol>
      </div>
    </div>
  );
};

export default SystemFlowchart;
