"use client";

import { useState } from "react";
import dates from "@/database/dates.json";
import {
    DialogHeader,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/dialog";
import { Badge } from "@/components/badge";

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
                {Array.from({ length: daysInMonth[visibleMonth] }, (_, day) => {
                    const dayNumber = day + 1;

                    const dayEvents = dates.filter((event) => {
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
                                dayNumber === currentDay &&
                                visibleMonth === currentMonth
                                    ? "bg-blue-100"
                                    : ""
                            }`}
                        >
                            <span className="text-sm font-medium">
                                {dayNumber}
                            </span>

                            <div className="flex flex-col gap-1 mt-1">
                                {dayEvents.map((event) => {
                                    const eventDate = new Date(event.date);
                                    const yearsAgo =
                                        new Date().getFullYear() -
                                        eventDate.getFullYear();

                                    return (
                                        <Dialog key={event.id}>
                                            <DialogTrigger>
                                                <Badge className="cursor-pointer">
                                                    {event.title}
                                                </Badge>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>
                                                        {event.title}
                                                    </DialogTitle>
                                                    <DialogTitle className="text-md text-gray-500">
                                                        {yearsAgo} years ago
                                                    </DialogTitle>
                                                    <DialogDescription>
                                                        {event.description}
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
