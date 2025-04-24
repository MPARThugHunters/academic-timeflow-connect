
import React from 'react';
import { EmptySlot } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface EmptySlotsProps {
  teacherName: string;
  emptySlots: EmptySlot[];
  open: boolean;
  onClose: () => void;
}

const EmptySlots: React.FC<EmptySlotsProps> = ({ 
  teacherName, 
  emptySlots,
  open,
  onClose
}) => {
  // Group by days for better organization
  const slotsByDay = emptySlots.reduce((acc: Record<string, string[]>, slot) => {
    if (!acc[slot.day]) {
      acc[slot.day] = [];
    }
    acc[slot.day].push(slot.time);
    return acc;
  }, {});

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-academic-primary text-xl font-bold">
            Available Time Slots for {teacherName}
          </DialogTitle>
          <DialogDescription>
            Below are the empty slots when the faculty is available.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          {Object.keys(slotsByDay).length > 0 ? (
            Object.entries(slotsByDay).map(([day, times]) => (
              <div key={day} className="mb-4">
                <h3 className="font-medium text-academic-secondary mb-2">{day}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {times.map((time, index) => (
                    <div 
                      key={index}
                      className="bg-gray-100 px-3 py-2 rounded text-sm"
                    >
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No empty slots available
            </div>
          )}
        </div>

        <DialogFooter>
          <Button 
            className="bg-academic-primary hover:bg-academic-secondary"
            onClick={onClose}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EmptySlots;
