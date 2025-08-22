import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>Dark Dates</title>
            </head>
            <body>
                <div>{children}</div>
            </body>
        </html>
    );
}
