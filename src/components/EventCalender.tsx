"use client";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded">
      <Calendar onChange={onChange} value={value} />
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-lg font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" height={20} width={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((events) => (
          <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple" key={events.id}>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{events.title}</h1>
              <span className="text-gray-300 text-xs">{events.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{events.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalender;
