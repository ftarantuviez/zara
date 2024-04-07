import type { Metadata } from "next";
import "./globals.css";
import { CharactersProvider, MainLayout } from "@/components";

export const metadata: Metadata = {
  title: "Marvel",
  description: "See the best Marvel Characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CharactersProvider>
      <html lang="en">
        <body>
          <MainLayout>{children}</MainLayout>
        </body>
      </html>
    </CharactersProvider>
  );
}
