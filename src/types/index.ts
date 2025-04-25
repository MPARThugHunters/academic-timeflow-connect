
export type UserRole = 'student' | 'teacher';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  section?: string;
  semester?: number;
  department?: string;
  age?: number; // Additional fields as requested
  profession?: string;
  experience?: number;
  qualification?: string;
  contactNumber?: string;
  specialization?: string;
}

export interface TimeTableEntry {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  startTime: string;
  endTime: string;
  subject: string;
  teacherId: string;
  teacherName: string;
  room: string;
  section: string;
  semester: number;
  department: string;
}

export interface EmptySlot {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  time: string;
}
