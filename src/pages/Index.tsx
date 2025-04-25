
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (role: 'student' | 'teacher') => {
    // Mock login - in a real app this would validate against a backend
    const user = {
      id: '1',
      name: role === 'teacher' ? 'Dr. Smith' : 'John Doe',
      email: email || 'demo@example.com',
      role: role,
      department: 'Computer Science',
      semester: 4,
      section: 'CSE-A',
      specialization: 'Data Structures'
    };

    localStorage.setItem('currentUser', JSON.stringify(user));
    
    toast({
      title: "Welcome back!",
      description: `Logged in successfully as ${user.name}`,
    });

    navigate(role === 'teacher' ? '/teacher-dashboard' : '/student-dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-academic-primary/10 to-academic-secondary/10">
      <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-2xl shadow-xl">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-academic-primary to-academic-secondary bg-clip-text text-transparent">
            Academic Timetable Manager
          </h1>
          <p className="text-gray-500">Sign in to access your timetable</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>

          <Button 
            className="w-full bg-academic-primary hover:bg-academic-secondary transition-colors"
            onClick={() => handleLogin('student')}
          >
            Sign In
          </Button>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">For demo purpose</span>
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            variant="outline"
            className="w-full hover:bg-academic-primary/10"
            onClick={() => handleLogin('student')}
          >
            Demo Student Login
          </Button>
          
          <Button 
            variant="outline"
            className="w-full hover:bg-academic-primary/10"
            onClick={() => handleLogin('teacher')}
          >
            Demo Teacher Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
