import "./globals.css";
import { Roboto, Poppins } from "next/font/google";

// const font = Roboto({
//   weight: ["400", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   display: "swap",
// });

const font = Poppins({ weight: "400", subsets: ["latin"] });


import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata = {
  title: "IITB Rocket Team",
  description: "Admire the rockets, view past launches, and meet the team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
