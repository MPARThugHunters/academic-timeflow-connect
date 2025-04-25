
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9b87f5] via-[#7E69AB] to-[#1A1F2C] p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-none overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] text-white rounded-t-lg py-6">
            <CardTitle className="text-3xl font-bold text-center tracking-wider">
              Academic Timetable Manager
            </CardTitle>
            <CardDescription className="text-gray-100 text-center opacity-80">
              Elevate Your Academic Experience
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="email" className="text-white/80">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-[#D6BCFA]"
                  required
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="password" className="text-white/80">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-[#D6BCFA]"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#F97316] to-[#D946EF] text-white hover:from-[#D946EF] hover:to-[#F97316] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 bg-gradient-to-r from-[#6E59A5]/20 to-[#8B5CF6]/20 p-6">
            <div className="text-sm text-white/70 text-center mb-2">Demo Login Options:</div>
            <div className="flex gap-4 w-full">
              <Button 
                variant="outline" 
                className="flex-1 text-sm border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleDemoLogin('student')}
              >
                Demo Student Login
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 text-sm border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
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
