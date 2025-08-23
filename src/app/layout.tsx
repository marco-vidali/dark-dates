import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <title>Dark Dates</title>
            </head>
            <body>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <div>{children}</div>
                </ThemeProvider>
            </body>
        </html>
    );
}
