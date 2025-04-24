
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from '@/types';

interface TeacherCardProps {
  teacher: User;
  onClose: () => void;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher, onClose }) => {
  if (!teacher) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <Card className="w-[350px] max-h-[90vh] overflow-y-auto">
        <CardHeader className="bg-academic-primary text-white">
          <div className="flex justify-between items-center">
            <CardTitle>{teacher.name}</CardTitle>
            <button onClick={onClose} className="text-white hover:text-gray-200">
              ✕
            </button>
          </div>
          <CardDescription className="text-gray-200">
            {teacher.specialization}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <span className="font-semibold text-gray-600">Department:</span>
              <span className="col-span-2">{teacher.department}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <span className="font-semibold text-gray-600">Role:</span>
              <span className="col-span-2">{teacher.profession}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <span className="font-semibold text-gray-600">Experience:</span>
              <span className="col-span-2">{teacher.experience} years</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <span className="font-semibold text-gray-600">Qualification:</span>
              <span className="col-span-2">{teacher.qualification}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <span className="font-semibold text-gray-600">Age:</span>
              <span className="col-span-2">{teacher.age} years</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <span className="font-semibold text-gray-600">Contact:</span>
              <span className="col-span-2">{teacher.contactNumber}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <span className="font-semibold text-gray-600">Email:</span>
              <span className="col-span-2 break-words">{teacher.email}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-academic-primary text-white rounded hover:bg-academic-secondary transition-colors"
          >
            Close
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TeacherCard;
