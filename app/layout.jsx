import "./globals.css";
import { Inter, Poppins } from "next/font/google";

// not specifying weights imports all weights
const font = Inter({ subsets: ["latin"] });

import Navbar from "./Navbar";
import Footer from "./Footer";
import Stars from "./Stars";

export const metadata = {
  title: "IITB Rocket Team",
  description: "Admire the rockets, view past launches, and meet the team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Stars />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
