import "./globals.css";

import { geist, geist_mono, geist_pixel } from "./fonts";

const font_vars = [geist, geist_mono, geist_pixel]
  .map((f) => f.variable)
  .join(" ");

import Navbar from "./Navbar";
import Footer from "./Footer";

// Stars.jsx (twinkling background) is no longer rendered - every page now has
// the solid telemetry background, which covered it anyway

export const metadata = {
  title: "IITB Rocket Team",
  description: "Admire the rockets, view past launches, and meet the team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font_vars}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
