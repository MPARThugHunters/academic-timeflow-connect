
import React from 'react';
import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowDown } from 'lucide-react';

const SystemFlowchart = () => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md overflow-x-auto">
      <h2 className="text-2xl font-bold text-center mb-8 text-academic-primary">
        TimeTable Management System - Architecture Flowchart
      </h2>

      {/* Main flowchart container */}
      <div className="min-w-[900px] relative">
        {/* Frontend Section */}
        <div className="flex flex-col items-center">
          <Card className="w-64 p-4 text-center bg-academic-light border-2 border-academic-primary">
            <h3 className="font-bold">Frontend (React)</h3>
            <p className="text-sm mt-2">User Interface & Client-side Logic</p>
          </Card>

          <div className="flex justify-center my-4">
            <ArrowDown className="text-academic-primary" size={24} />
          </div>

          {/* User Authentication */}
          <div className="flex space-x-8 mb-8">
            <Card className="w-48 p-3 text-center bg-white border-2 border-academic-secondary">
              <h4 className="font-semibold">Login Page</h4>
              <p className="text-xs mt-1">Authentication</p>
            </Card>
            <ArrowRight className="self-center text-academic-primary" size={24} />
            <Card className="w-48 p-3 text-center bg-white border-2 border-academic-secondary">
              <h4 className="font-semibold">Role Verification</h4>
              <p className="text-xs mt-1">JWT Auth Check</p>
            </Card>
          </div>

          {/* User Dashboards */}
          <div className="flex justify-center space-x-12 mb-8">
            <div className="flex flex-col items-center">
              <ArrowDown className="text-academic-primary mb-2" size={24} />
              <Card className="w-48 p-3 text-center bg-white border-2 border-academic-secondary">
                <h4 className="font-semibold">Student Dashboard</h4>
                <p className="text-xs mt-1">Class Schedule View</p>
              </Card>
              <div className="flex flex-col items-center mt-4">
                <ArrowDown className="text-academic-primary mb-2" size={24} />
                <div className="flex space-x-4">
                  <Card className="w-32 p-2 text-center bg-academic-light border border-academic-primary">
                    <h5 className="text-sm font-semibold">Timetable</h5>
                    <p className="text-xs mt-1">Filtered by Department, Semester, Section</p>
                  </Card>
                  <Card className="w-32 p-2 text-center bg-academic-light border border-academic-primary">
                    <h5 className="text-sm font-semibold">Teacher Info</h5>
                    <p className="text-xs mt-1">Click for Teacher Details</p>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <ArrowDown className="text-academic-primary mb-2" size={24} />
              <Card className="w-48 p-3 text-center bg-white border-2 border-academic-secondary">
                <h4 className="font-semibold">Teacher Dashboard</h4>
                <p className="text-xs mt-1">Teaching Schedule</p>
              </Card>
              <div className="flex flex-col items-center mt-4">
                <ArrowDown className="text-academic-primary mb-2" size={24} />
                <div className="flex space-x-4">
                  <Card className="w-32 p-2 text-center bg-academic-light border border-academic-primary">
                    <h5 className="text-sm font-semibold">Weekly Schedule</h5>
                    <p className="text-xs mt-1">Subject and Class Details</p>
                  </Card>
                  <Card className="w-32 p-2 text-center bg-academic-light border border-academic-primary">
                    <h5 className="text-sm font-semibold">Empty Slots</h5>
                    <p className="text-xs mt-1">Available Time Slots</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* API Connection */}
          <div className="flex my-8 items-center">
            <ArrowDown className="text-academic-primary mx-4" size={24} />
            <Card className="w-64 p-3 text-center bg-academic-light border-2 border-academic-primary">
              <h4 className="font-semibold">API Layer</h4>
              <p className="text-xs mt-1">HTTP/REST Communication</p>
            </Card>
            <ArrowDown className="text-academic-primary mx-4" size={24} />
          </div>
        </div>

        {/* Backend Section */}
        <div className="flex flex-col items-center">
          <Card className="w-64 p-4 text-center bg-academic-secondary text-white border-2 border-academic-dark">
            <h3 className="font-bold">Backend (Node.js/Express)</h3>
            <p className="text-sm mt-2">Server-side Logic & API Endpoints</p>
          </Card>
          
          <div className="flex justify-center space-x-16 my-8">
            <div className="flex flex-col items-center">
              <ArrowDown className="text-academic-primary mb-2" size={24} />
              <Card className="w-48 p-3 text-center bg-white border-2 border-academic-secondary">
                <h4 className="font-semibold">Authentication</h4>
                <p className="text-xs mt-1">JWT Token Management</p>
              </Card>
            </div>
            <div className="flex flex-col items-center">
              <ArrowDown className="text-academic-primary mb-2" size={24} />
              <Card className="w-48 p-3 text-center bg-white border-2 border-academic-secondary">
                <h4 className="font-semibold">API Routes</h4>
                <p className="text-xs mt-1">Timetable & User Data</p>
              </Card>
            </div>
          </div>
          
          {/* Database Section */}
          <div className="flex my-8 items-center">
            <ArrowDown className="text-academic-primary mx-4" size={24} />
            <Card className="w-64 p-4 text-center bg-academic-dark text-white border-2 border-academic-primary">
              <h3 className="font-bold">MongoDB Database</h3>
              <p className="text-sm mt-2">Data Storage & Retrieval</p>
            </Card>
          </div>
          
          {/* Database Models */}
          <div className="flex justify-center space-x-16">
            <Card className="w-48 p-3 text-center bg-white border-2 border-academic-dark">
              <h4 className="font-semibold">User Model</h4>
              <p className="text-xs mt-1">Students & Teachers</p>
            </Card>
            <Card className="w-48 p-3 text-center bg-white border-2 border-academic-dark">
              <h4 className="font-semibold">Timetable Model</h4>
              <p className="text-xs mt-1">Schedule Entries</p>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="mt-12 px-4 py-3 bg-gray-100 rounded-lg">
        <h3 className="font-semibold text-academic-secondary mb-2">Flow Process:</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>User logs in with email/password</li>
          <li>System authenticates and determines user role (student/teacher)</li>
          <li>Redirects to appropriate dashboard based on role</li>
          <li>Dashboard fetches relevant timetable data from the database via API</li>
          <li>Students view filtered timetables and can check teacher information</li>
          <li>Teachers view their teaching schedules and available time slots</li>
        </ol>
      </div>
    </div>
  );
};

export default SystemFlowchart;
