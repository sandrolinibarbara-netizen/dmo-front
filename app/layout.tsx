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
        const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/link',
            { next: { revalidate: 1000 }});
        content = await data.json();

        const contactsData = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/contact',
            { next: { revalidate: 1000 }});
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
