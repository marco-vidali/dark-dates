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
            className={`border-r border-b p-2 flex flex-col gap-2 ${
                dayNumber === currentDay && visibleMonth === currentMonth
                    ? "bg-secondary"
                    : ""
            }`}
        >
            <span className={`text-2xl pl-1 font-medium opacity-50`}>
                {dayNumber}
            </span>

            <div>
                {dayEvents.map((event) => (
                    <Event key={event.id} {...event} />
                ))}
            </div>
        </div>
    );
}
