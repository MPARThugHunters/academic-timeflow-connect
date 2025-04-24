
import { User, TimeTableEntry, EmptySlot } from "../types";

const indianTeacherNames = [
  "Dr. Ramesh Kumar", 
  "Prof. Suresh Verma", 
  "Dr. Keerthi Reddy", 
  "Prof. Sharanya Iyer", 
  "Dr. Mahendhar Singh", 
  "Prof. Vinay Patil", 
  "Dr. Vijay Krishnan", 
  "Prof. Ravikanth Sharma", 
  "Dr. Sushma Gupta", 
  "Prof. Sumati Nair"
];

// Mock Teachers
export const teachers: User[] = [
  {
    id: "t1",
    name: indianTeacherNames[0],
    email: "ramesh.kumar@example.com",
    role: "teacher",
    department: "CSE",
    age: 45,
    profession: "Professor",
    experience: 15,
    qualification: "PhD in Computer Science",
    contactNumber: "+91-9876543210",
    specialization: "Operating Systems"
  },
  {
    id: "t2",
    name: indianTeacherNames[1],
    email: "suresh.verma@example.com",
    role: "teacher",
    department: "CSE",
    age: 50,
    profession: "Associate Professor",
    experience: 20,
    qualification: "PhD in Computer Architecture",
    contactNumber: "+91-9876543211",
    specialization: "Computer Organization"
  },
  {
    id: "t3",
    name: indianTeacherNames[2],
    email: "keerthi.reddy@example.com",
    role: "teacher",
    department: "CSE",
    age: 38,
    profession: "Assistant Professor",
    experience: 10,
    qualification: "PhD in Economics",
    contactNumber: "+91-9876543212",
    specialization: "Economics"
  },
  {
    id: "t4",
    name: indianTeacherNames[3],
    email: "sharanya.iyer@example.com",
    role: "teacher",
    department: "CSE",
    age: 42,
    profession: "Professor",
    experience: 12,
    qualification: "PhD in Software Engineering",
    contactNumber: "+91-9876543213",
    specialization: "Software Engineering"
  },
  {
    id: "t5",
    name: indianTeacherNames[4],
    email: "mahendhar.singh@example.com",
    role: "teacher",
    department: "CSE",
    age: 47,
    profession: "Professor",
    experience: 18,
    qualification: "PhD in Algorithms",
    contactNumber: "+91-9876543214",
    specialization: "Design and Analysis of Algorithms"
  },
  {
    id: "t6",
    name: indianTeacherNames[5],
    email: "vinay.patil@example.com",
    role: "teacher",
    department: "CSE",
    age: 35,
    profession: "Assistant Professor",
    experience: 8,
    qualification: "MA in Physical Education",
    contactNumber: "+91-9876543215",
    specialization: "Extra-Curricular Activities"
  },
  {
    id: "t7",
    name: indianTeacherNames[6],
    email: "vijay.krishnan@example.com",
    role: "teacher",
    department: "CSE",
    age: 40,
    profession: "Librarian",
    experience: 12,
    qualification: "Master in Library Science",
    contactNumber: "+91-9876543216",
    specialization: "Library Sciences"
  }
];

// Mock Students
export const students: User[] = [
  {
    id: "s1",
    name: "Anil Kumar",
    email: "anil@student.com",
    password: "password123", // In real app, should be hashed
    role: "student",
    section: "CSE-A",
    semester: 4,
    department: "CSE",
    age: 20
  },
  {
    id: "s2",
    name: "Priya Sharma",
    email: "priya@student.com",
    password: "password123", // In real app, should be hashed
    role: "student",
    section: "CSE-B",
    semester: 4,
    department: "CSE",
    age: 19
  },
  {
    id: "s3",
    name: "Ravi Patel",
    email: "ravi@student.com",
    password: "password123", // In real app, should be hashed
    role: "student",
    section: "CSE-C",
    semester: 4,
    department: "CSE",
    age: 21
  },
  {
    id: "s4",
    name: "Sneha Reddy",
    email: "sneha@student.com",
    password: "password123", // In real app, should be hashed
    role: "student",
    section: "CSE-D",
    semester: 4,
    department: "CSE",
    age: 20
  }
];

// Combined users for authentication
export const users = [...teachers, ...students];

// Helper function to create a week's schedule
const createWeekSchedule = (section: string, semester: number): TimeTableEntry[] => {
  const days: Array<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'> = 
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const timeSlots = [
    { start: "10:00 AM", end: "11:00 AM" },
    { start: "11:00 AM", end: "12:00 PM" },
    { start: "12:00 PM", end: "01:00 PM" },
    // Lunch break: 1:00 PM - 2:00 PM
    { start: "02:00 PM", end: "03:00 PM" },
    { start: "03:00 PM", end: "04:00 PM" },
    { start: "04:00 PM", end: "05:00 PM" }
  ];

  const subjects = [
    { name: "Operating Systems", teacherId: "t1", teacherName: indianTeacherNames[0] },
    { name: "Computer Organization", teacherId: "t2", teacherName: indianTeacherNames[1] },
    { name: "Economics", teacherId: "t3", teacherName: indianTeacherNames[2] },
    { name: "Software Engineering", teacherId: "t4", teacherName: indianTeacherNames[3] },
    { name: "Design and Analysis of Algorithms", teacherId: "t5", teacherName: indianTeacherNames[4] },
    { name: "Extra-Curricular Activities", teacherId: "t6", teacherName: indianTeacherNames[5] },
    { name: "Library", teacherId: "t7", teacherName: indianTeacherNames[6] }
  ];

  const roomNumbers = ["101", "102", "103", "104", "105", "Playground", "Library"];

  const schedule: TimeTableEntry[] = [];
  let entryId = 1;

  days.forEach(day => {
    // Shuffle the subjects and rooms for variety between days
    const shuffledSubjects = [...subjects].sort(() => Math.random() - 0.5);
    const shuffledRooms = [...roomNumbers].sort(() => Math.random() - 0.5);

    timeSlots.forEach((slot, index) => {
      // Skip some slots randomly to create empty slots for teachers
      if (Math.random() > 0.8) {
        return;
      }

      const subjectIndex = index % subjects.length;
      const subject = shuffledSubjects[subjectIndex];
      const room = shuffledRooms[subjectIndex];

      schedule.push({
        id: `entry-${entryId++}`,
        day,
        startTime: slot.start,
        endTime: slot.end,
        subject: subject.name,
        teacherId: subject.teacherId,
        teacherName: subject.teacherName,
        room,
        section,
        semester,
        department: "CSE"
      });
    });
  });

  return schedule;
};

// Create timetables for all CSE sections
export const timeTableEntries: TimeTableEntry[] = [
  ...createWeekSchedule("CSE-A", 4),
  ...createWeekSchedule("CSE-B", 4),
  ...createWeekSchedule("CSE-C", 4),
  ...createWeekSchedule("CSE-D", 4)
];

// Function to get timetable by section and semester
export const getTimeTableBySection = (section: string, semester: number): TimeTableEntry[] => {
  return timeTableEntries.filter(entry => entry.section === section && entry.semester === semester);
};

// Function to get timetable by teacher
export const getTimeTableByTeacher = (teacherId: string): TimeTableEntry[] => {
  return timeTableEntries.filter(entry => entry.teacherId === teacherId);
};

// Function to get timetable by day
export const getTimeTableByDay = (day: string, section: string, semester: number): TimeTableEntry[] => {
  return timeTableEntries.filter(
    entry => entry.day === day && entry.section === section && entry.semester === semester
  );
};

// Function to get empty slots for a teacher
export const getEmptySlotsForTeacher = (teacherId: string): EmptySlot[] => {
  const teacherSchedule = getTimeTableByTeacher(teacherId);
  const days: Array<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'> = 
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const timeSlots = [
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM"
  ];

  const emptySlots: EmptySlot[] = [];

  days.forEach(day => {
    timeSlots.forEach(time => {
      const [startTime] = time.split(" - ");
      const hasClass = teacherSchedule.some(
        entry => entry.day === day && entry.startTime === startTime
      );

      if (!hasClass) {
        emptySlots.push({ day, time });
      }
    });
  });

  return emptySlots;
};

// Function to get teacher information by ID
export const getTeacherById = (id: string): User | undefined => {
  return teachers.find(teacher => teacher.id === id);
};

// Mock authentication function
export const authenticateUser = (email: string, password: string): User | null => {
  // In a real app, you would check hashed passwords
  const user = users.find(user => user.email === email);
  return user || null;
};
