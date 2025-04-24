
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import TimeTable from '@/components/TimeTable';
import { teachers, getTimeTableByTeacher } from '@/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User } from '@/types';

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTeacher, setSelectedTeacher] = useState<string>("");
  const [selectedSection, setSelectedSection] = useState<string>("all");
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {
    // Get user from localStorage
    const userJson = localStorage.getItem('currentUser');
    
    if (!userJson) {
      navigate('/');
      return;
    }
    
    const user = JSON.parse(userJson);
    if (user.role !== 'teacher') {
      navigate('/');
      return;
    }
    
    setCurrentUser(user);
    setSelectedTeacher(user.id);
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  const handleTeacherChange = (teacherId: string) => {
    setSelectedTeacher(teacherId);
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  // Get current teacher's timetable
  const teacherTimetable = getTimeTableByTeacher(selectedTeacher);
  
  // Filter by section if selected
  const filteredTimetable = selectedSection === "all" 
    ? teacherTimetable 
    : teacherTimetable.filter(entry => entry.section === selectedSection);
  
  // Get all sections taught by this teacher for the filter
  const teacherSections = [...new Set(teacherTimetable.map(entry => entry.section))];
  
  // Get teacher name
  const teacherName = teachers.find(t => t.id === selectedTeacher)?.name || "Teacher";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userName={currentUser?.name || ''} onLogout={handleLogout} />
      
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-academic-primary mb-6">Faculty Dashboard</h1>
          
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
            <div className="flex-grow">
              <h2 className="text-lg font-medium text-gray-700">Welcome, {currentUser?.name}</h2>
              <p className="text-gray-500">Department: {currentUser?.department}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="w-64">
                <Select value={selectedTeacher} onValueChange={handleTeacherChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select faculty" />
                  </SelectTrigger>
                  <SelectContent>
                    {teachers.map((teacher) => (
                      <SelectItem key={teacher.id} value={teacher.id}>{teacher.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-40">
                <Select value={selectedSection} onValueChange={setSelectedSection}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sections</SelectItem>
                    {teacherSections.map((section) => (
                      <SelectItem key={section} value={section}>{section}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Faculty Summary Card */}
          <Card className="mb-6 border-l-4 border-l-academic-primary">
            <CardHeader className="pb-2">
              <h3 className="text-lg font-medium">Teaching Summary</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Total Classes</p>
                  <p className="text-2xl font-bold text-academic-primary">
                    {filteredTimetable.length}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Sections</p>
                  <p className="text-2xl font-bold text-academic-primary">
                    {teacherSections.length}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Subject</p>
                  <p className="text-2xl font-bold text-academic-primary">
                    {currentUser?.specialization || "Not specified"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="all">
            <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-6">
              <TabsTrigger value="all">All Days</TabsTrigger>
              {days.map(day => (
                <TabsTrigger key={day} value={day}>{day}</TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="all" className="mt-4">
              <TimeTable 
                entries={filteredTimetable} 
                title={`${teacherName}'s Schedule`}
                isTeacherTable
                showTeacherDetails={false}
              />
            </TabsContent>
            
            {days.map(day => (
              <TabsContent key={day} value={day} className="mt-4">
                <TimeTable 
                  entries={filteredTimetable.filter(entry => entry.day === day)} 
                  title={`${teacherName}'s ${day} Schedule`}
                  isTeacherTable
                  showTeacherDetails={false}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
