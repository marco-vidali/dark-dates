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

export default function Page() {
    return (
        <>
            {months.map((month, index) => (
                <div
                    className="h-screen p-4 flex flex-col gap-4"
                    key={index}
                    id={month.toLocaleLowerCase()}
                >
                    <h1 className="text-xl font-bold">{month}</h1>

                    <div className="grid grid-cols-7 grow">
                        {Array.from(
                            { length: daysInMonth[index] },
                            (_, day) => (
                                <div key={day} className="border-r border-b">
                                    <span className="text-large">
                                        {day + 1}
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </div>
            ))}
        </>
    );
}
