import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Api work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Nav/>
        <main className="relative overflow-hidden">
          {children}
        </main>
        </body>
    </html>
  );
}
