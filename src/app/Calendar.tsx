import Day from "./Day";
import { daysInMonth } from "@/lib/consts";

interface CalendarProps {
    visibleMonth: number;
    currentMonth: number;
}

export default function Calendar({
    visibleMonth,
    currentMonth,
}: CalendarProps) {
    return (
        <div className="grid grid-cols-7 grid-rows-5 grow border-l border-t">
            {Array.from({ length: daysInMonth[visibleMonth] }, (_, day) => (
                <Day
                    key={day}
                    day={day}
                    visibleMonth={visibleMonth}
                    currentMonth={currentMonth}
                />
            ))}
        </div>
    );
}
