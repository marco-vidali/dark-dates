"use client";

import MonthSelector from "./MonthSelector";
import Calendar from "./Calendar";
import { useState } from "react";
import { daysInMonth } from "@/lib/consts";

const currentMonth = new Date().getMonth();

export default function Page() {
    const [visibleMonth, setVisibleMonth] = useState(currentMonth);

    return (
        <div className="h-screen p-4 flex flex-col gap-4">
            <div className="flex justify-center">
                <MonthSelector
                    visibleMonth={visibleMonth}
                    setVisibleMonth={setVisibleMonth}
                />
            </div>

            <Calendar visibleMonth={visibleMonth} currentMonth={currentMonth} />
        </div>
    );
}
