import { Inter } from "next/font/google";
import "./globals.css";
import { FaUserFriends } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoTriangle } from "react-icons/io5";
import Link from 'next/link';
import { NavItem } from "@/components/nav-item";
import {Button} from "@/components/button"
import { MdOutlinePayment } from "react-icons/md";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recurzive",
  description: "hackathon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2"> 
              <div className="flex h-[60px] items-center border-b px-5">
                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="/"
                >
                  {/* logo */}
                  <span className="">Hackathon</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                  <NavItem href="/">
                    <FaUserFriends size={22} />
                    Score
                  </NavItem>
                  <NavItem href="/transactions">
                    <IoIosSettings size={22} />
                    Transactions
                  </NavItem>
                  <NavItem href="/chat">
                    <IoTriangle size={22} />
                    Chatbot
                  </NavItem>
                  <NavItem href="/payment">
                    <MdOutlinePayment size={22} />
                    Payment
                  </NavItem>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
              <Link
                className="flex items-center gap-2 font-semibold lg:hidden"
                href="/"
              >
                {/* <Logo /> */}
                <span className="">ACME</span>
              </Link>
              {/* <User /> */}
              <Link href={'/auth'}>
              <Button className="h-10">
                Sign Out
              </Button>
              </Link>
            </header>
            {children}
          </div>
        </div>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}