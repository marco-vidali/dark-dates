import events from "@/database/events.json";
import Event from "./Event";

interface DayProps {
    day: number;
    visibleMonth: number;
    currentMonth: number;
}

const currentDay = new Date().getDate();

export default function Day({ day, visibleMonth, currentMonth }: DayProps) {
    const dayNumber = day + 1;

    const dayEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return (
            eventDate.getDate() === dayNumber &&
            eventDate.getMonth() === visibleMonth
        );
    });

    return (
        <div
            key={day}
            className={`border-r border-b p-1 flex flex-col ${
                dayNumber === currentDay && visibleMonth === currentMonth
                    ? "bg-blue-100"
                    : ""
            }`}
        >
            <span className="text-sm font-medium">{dayNumber}</span>

            <div>
                {dayEvents.map((event) => (
                    <Event key={event.id} {...event} />
                ))}
            </div>
        </div>
    );
}
