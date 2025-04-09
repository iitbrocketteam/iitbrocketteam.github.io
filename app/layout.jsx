"use client";

import "./globals.css";
import { Inter, Poppins } from "next/font/google";

// not specifying weights imports all weights
const font = Inter({ subsets: ["latin"] });

import Navbar from "./Navbar";
import Footer from "./Footer";
import Stars from "./Stars";

import { ThemeProvider, ThemeContext } from "./Theme";
import { useContext } from "react";

// export const metadata = {
//   title: "IITB Rocket Team",
//   description: "Admire the rockets, view past launches, and meet the team",
// };

const App = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <html lang="en" className={theme}>
      <body className={font.className}>
        <Stars />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <App>{children}</App>
    </ThemeProvider>
  );
}
