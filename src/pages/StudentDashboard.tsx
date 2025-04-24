
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import TimeTable from '@/components/TimeTable';
import { getTimeTableBySection, getTimeTableByDay } from '@/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState('CSE-A');
  const [semester, setSemester] = useState(4);
  const [activeDay, setActiveDay] = useState('full-week');

  useEffect(() => {
    // Get user from localStorage
    const userJson = localStorage.getItem('currentUser');
    
    if (!userJson) {
      navigate('/');
      return;
    }
    
    const user = JSON.parse(userJson);
    if (user.role !== 'student') {
      navigate('/');
      return;
    }
    
    setCurrentUser(user);
    if (user.section) setSection(user.section);
    if (user.semester) setSemester(user.semester);
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userName={currentUser?.name || ''} onLogout={handleLogout} />
      
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-academic-primary mb-6">Student Dashboard</h1>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-medium text-gray-700">Welcome, {currentUser?.name}</h2>
              <p className="text-gray-500">Department: {currentUser?.department} | Semester: {currentUser?.semester}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="w-40">
                <Select value={section} onValueChange={setSection}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CSE-A">CSE-A</SelectItem>
                    <SelectItem value="CSE-B">CSE-B</SelectItem>
                    <SelectItem value="CSE-C">CSE-C</SelectItem>
                    <SelectItem value="CSE-D">CSE-D</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Tabs defaultValue="full-week" value={activeDay} onValueChange={setActiveDay} className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-6">
              <TabsTrigger value="full-week">Full Week</TabsTrigger>
              {days.map((day) => (
                <TabsTrigger key={day} value={day}>{day}</TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="full-week" className="mt-4">
              <TimeTable 
                entries={getTimeTableBySection(section, semester)} 
                title={`${section} Timetable`}
              />
            </TabsContent>

            {days.map((day) => (
              <TabsContent key={day} value={day} className="mt-4">
                <TimeTable 
                  entries={getTimeTableByDay(day, section, semester)} 
                  title={`${day} Schedule for ${section}`}
                  day={day}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
