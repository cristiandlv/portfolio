import "./globals.css";

import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Mi Portfolio - Cristian",
  description: "Portfolio frontend developer - Next.js, Tailwind, API",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
