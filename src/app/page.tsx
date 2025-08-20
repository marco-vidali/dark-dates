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

export default function Page() {
    return (
        <>
            {months.map((month, index) => (
                <div className="h-screen" key={index}>
                    <h1 className="text-xl font-bold">{month}</h1>
                </div>
            ))}
        </>
    );
}
