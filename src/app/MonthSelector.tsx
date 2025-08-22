import { months } from "@/lib/consts";
import { Dispatch, SetStateAction } from "react";

interface MonthSelectorProps {
    visibleMonth: number;
    setVisibleMonth: Dispatch<SetStateAction<number>>;
}

export default function MonthSelector({
    visibleMonth,
    setVisibleMonth,
}: MonthSelectorProps) {
    return (
        <div className="flex items-center w-64 justify-between">
            <button
                onClick={() => setVisibleMonth((m) => Math.max(0, m - 1))}
                disabled={visibleMonth === 0}
                className={`px-2 ${
                    visibleMonth === 0
                        ? "opacity-30 cursor-not-allowed"
                        : "cursor-pointer"
                }`}
            >
                &#60;
            </button>

            <span className="text-xl font-bold">{months[visibleMonth]}</span>

            <button
                onClick={() => setVisibleMonth((m) => Math.min(11, m + 1))}
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
    );
}
