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
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔪</text></svg>"
                />
            </head>
            <body>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <div>{children}</div>
                </ThemeProvider>
            </body>
        </html>
    );
}
