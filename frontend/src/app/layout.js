// "use client"
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "next-themes";
import Sidebar from "./components/Sidebar";
import { Toaster, toast } from 'sonner'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full dark:text-white dark:bg-black  bg-white text-black flex`}
      >
             <ThemeProvider attribute="class">
             <Toaster />
        <Sidebar/>

        {/* <ExpenseContext.Provider value={{expense,setExpense}}> */}
        <div className='p-8 w-full '>
           {children}
           </div>
           {/* </ExpenseContext.Provider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
