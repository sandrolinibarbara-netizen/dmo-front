import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "@/app/_components/Menu";
import Footer from "@/app/_components/Footer";
import Iubenda from "@/app/_components/Iubenda";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Visit Cremona",
  description: "Visit Cremona",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    let content, contactsContent;
    try {
        const data = await fetch('http://localhost:1337/api/link');
        content = await data.json();

        const contactsData = await fetch('http://localhost:1337/api/contact');
        contactsContent = await contactsData.json();
    } catch(error) {
        console.log(error);
    }

  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <Menu links={content.data}/>
    {children}
    <Footer links={content.data} contacts={contactsContent.data}/>
    <Iubenda/>
    </body>
    </html>
  );
}
