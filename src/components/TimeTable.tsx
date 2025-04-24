
import React, { useState } from 'react';
import { TimeTableEntry, User } from '@/types';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import TeacherCard from './TeacherCard';
import EmptySlots from './EmptySlots';
import { getEmptySlotsForTeacher, getTeacherById } from '@/mockData';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface TimeTableProps {
  entries: TimeTableEntry[];
  title: string;
  isTeacherTable?: boolean;
  showTeacherDetails?: boolean;
  day?: string;
}

const TimeTable: React.FC<TimeTableProps> = ({ 
  entries, 
  title, 
  isTeacherTable = false,
  showTeacherDetails = true,
  day
}) => {
  const [selectedTeacher, setSelectedTeacher] = useState<User | null>(null);
  const [showTeacherCard, setShowTeacherCard] = useState(false);
  const [showEmptySlots, setShowEmptySlots] = useState(false);
  const [selectedTeacherId, setSelectedTeacherId] = useState<string>("");

  const handleTeacherClick = (teacherId: string) => {
    if (!showTeacherDetails) return;
    
    const teacher = getTeacherById(teacherId);
    if (teacher) {
      setSelectedTeacher(teacher);
      setShowTeacherCard(true);
    }
  };

  const handleEmptySlots = (teacherId: string, teacherName: string) => {
    setSelectedTeacherId(teacherId);
    setShowEmptySlots(true);
  };

  // Filter by day if specified
  const filteredEntries = day 
    ? entries.filter(entry => entry.day === day)
    : entries;

  // Group by time for student view (by day)
  const groupedByTime = filteredEntries.reduce((acc, entry) => {
    const key = `${entry.startTime}-${entry.endTime}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(entry);
    return acc;
  }, {} as Record<string, TimeTableEntry[]>);

  if (filteredEntries.length === 0) {
    return (
      <div className="py-10 text-center">
        <h2 className="text-2xl font-bold text-gray-500">{title}</h2>
        <p className="mt-4 text-gray-400">No schedule entries found</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-academic-primary">{title}</h2>
      
      {isTeacherTable ? (
        // Teacher view - all classes for a teacher
        <Table>
          <TableCaption>Schedule for {title}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Day</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Section</TableHead>
              <TableHead>Semester</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEntries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell className="font-medium">{entry.day}</TableCell>
                <TableCell>{`${entry.startTime} - ${entry.endTime}`}</TableCell>
                <TableCell>{entry.subject}</TableCell>
                <TableCell>{entry.room}</TableCell>
                <TableCell>{entry.section}</TableCell>
                <TableCell>{entry.semester}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        // Student view - organized by time slots
        <Table>
          <TableCaption>{title} Timetable</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Teacher</TableHead>
              <TableHead>Room</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(groupedByTime)
              .sort(([timeA], [timeB]) => {
                // Sort times chronologically
                const startTimeA = timeA.split('-')[0].trim();
                const startTimeB = timeB.split('-')[0].trim();
                return startTimeA.localeCompare(startTimeB);
              })
              .map(([time, entriesForTime]) => (
                <TableRow key={time}>
                  <TableCell className="font-medium whitespace-nowrap">
                    {time}
                  </TableCell>
                  <TableCell>
                    {entriesForTime.map(entry => (
                      <div key={entry.id} className="py-1">{entry.subject}</div>
                    ))}
                  </TableCell>
                  <TableCell>
                    {entriesForTime.map(entry => (
                      <div key={entry.id} className="py-1">
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <span 
                              className="text-academic-primary cursor-pointer hover:underline"
                              onClick={() => handleTeacherClick(entry.teacherId)}
                            >
                              {entry.teacherName}
                            </span>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
                            <div className="flex flex-col">
                              <span className="font-bold">{entry.teacherName}</span>
                              <span className="text-sm text-gray-500">Click to view details</span>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>
                    {entriesForTime.map(entry => (
                      <div key={entry.id} className="py-1">{entry.room}</div>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            {/* Show lunch break */}
            {Object.keys(groupedByTime).length > 0 && (
              <TableRow>
                <TableCell className="font-medium bg-gray-100">01:00 PM - 02:00 PM</TableCell>
                <TableCell className="bg-gray-100 font-medium" colSpan={3}>Lunch Break</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}

      {showTeacherCard && selectedTeacher && (
        <TeacherCard 
          teacher={selectedTeacher} 
          onClose={() => setShowTeacherCard(false)} 
        />
      )}

      {isTeacherTable && (
        <div className="mt-6">
          <Button 
            onClick={() => handleEmptySlots(filteredEntries[0]?.teacherId, filteredEntries[0]?.teacherName)}
            className="bg-academic-secondary hover:bg-academic-primary"
          >
            View Empty Slots
          </Button>

          {showEmptySlots && (
            <EmptySlots 
              teacherName={filteredEntries[0]?.teacherName} 
              emptySlots={getEmptySlotsForTeacher(selectedTeacherId)}
              open={showEmptySlots}
              onClose={() => setShowEmptySlots(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TimeTable;
