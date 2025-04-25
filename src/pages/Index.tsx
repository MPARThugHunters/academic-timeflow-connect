
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { authenticateUser } from '../mockData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      const user = authenticateUser(email, password);
      
      if (user) {
        toast.success('Login successful!');
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Redirect based on user role
        if (user.role === 'student') {
          navigate('/student-dashboard');
        } else {
          navigate('/teacher-dashboard');
        }
      } else {
        toast.error('Invalid email or password');
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const handleDemoLogin = (role: 'student' | 'teacher') => {
    if (role === 'student') {
      setEmail('anil@student.com');
    } else {
      setEmail('ramesh.kumar@example.com');
    }
    setPassword('password123');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="bg-academic-primary text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">Academic Timetable Manager</CardTitle>
            <CardDescription className="text-gray-200 text-center">Sign in to access your timetable</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-academic-primary hover:bg-academic-secondary"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-sm text-gray-500 text-center mb-2">For demo purpose:</div>
            <div className="flex gap-2 w-full">
              <Button 
                variant="outline" 
                className="flex-1 text-sm border-academic-primary text-academic-primary hover:text-white hover:bg-academic-primary"
                onClick={() => handleDemoLogin('student')}
              >
                Demo Student Login
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 text-sm border-academic-primary text-academic-primary hover:text-white hover:bg-academic-primary"
                onClick={() => handleDemoLogin('teacher')}
              >
                Demo Teacher Login
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Index;
