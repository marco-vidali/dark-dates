"use client";

import { useState } from "react";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();

export default function Page() {
    const [visibleMonth, setVisibleMonth] = useState(currentMonth);

    return (
        <div className="h-screen p-4 flex flex-col gap-4">
            <div className="flex justify-center">
                <div className="relative flex items-center w-64 justify-between">
                    <button
                        onClick={() =>
                            setVisibleMonth((m) => Math.max(0, m - 1))
                        }
                        disabled={visibleMonth === 0}
                        className={`px-2 ${
                            visibleMonth === 0
                                ? "opacity-30 cursor-not-allowed"
                                : "cursor-pointer"
                        }`}
                    >
                        &#60;
                    </button>

                    <span className="text-xl font-bold">
                        {months[visibleMonth]}
                    </span>

                    <button
                        onClick={() =>
                            setVisibleMonth((m) => Math.min(11, m + 1))
                        }
                        disabled={visibleMonth === 11}
                        className={`px-2 ${
                            visibleMonth === 11
                                ? "opacity-30 cursor-not-allowed"
                                : "cursor-pointer"
                        }`}
                    >
                        &#62;
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 grow border-l border-t">
                {Array.from({ length: daysInMonth[visibleMonth] }, (_, day) => (
                    <div
                        key={day}
                        className={`border-r border-b ${
                            day + 1 === currentDay &&
                            visibleMonth === currentMonth
                                ? "bg-blue-100"
                                : ""
                        }`}
                    >
                        <span>{day + 1}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
