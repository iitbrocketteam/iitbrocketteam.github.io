import localFont from "next/font/local";

// exposed as CSS variables on <html>, see layout.jsx

// All self-hosted from app/fonts (SIL Open Font License). Geist and Geist Mono
// are the variable fonts from the `geist` npm package (v1.7.2) - loading them
// through next/font/google broke `next dev --turbopack` on Next 15.0.4 when
// Google served font URLs with extra query params.

export const geist = localFont({
  src: "./fonts/Geist-Variable.woff2",
  weight: "100 900",
  variable: "--font-geist",
});

export const geist_mono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  weight: "100 900",
  variable: "--font-geist-mono",
});

// Geist Pixel, from Google Fonts. Variable font: the ELSH axis picks the pixel
// shape (0 regular, 1 square) - use `font-variation-settings: "ELSH" 1`
export const geist_pixel = localFont({
  src: "./fonts/GeistPixel-Variable.woff2",
  weight: "400",
  variable: "--font-geist-pixel",
});
