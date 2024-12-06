import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "IITB Rocket Team",
  description: "Admire the rockets, view past launches, and meet the team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className}`}>{children}</body>
    </html>
  );
}
