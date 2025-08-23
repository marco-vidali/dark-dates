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
                className={`p-2 rounded-full ${
                    visibleMonth === 0
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer hover:bg-secondary"
                }`}
            >
                ◀
            </button>

            <span className="text-xl font-bold">{months[visibleMonth]}</span>

            <button
                onClick={() => setVisibleMonth((m) => Math.min(11, m + 1))}
                disabled={visibleMonth === 11}
                className={`p-2 rounded-full ${
                    visibleMonth === 11
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer hover:bg-secondary"
                }`}
            >
                ▶
            </button>
        </div>
    );
}
