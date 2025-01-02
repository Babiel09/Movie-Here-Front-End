import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie Here",
  description: "Website developed by Nu S 'Guilherme', and Babiel09 'Gabriel'.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
