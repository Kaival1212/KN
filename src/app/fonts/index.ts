import localFont from "next/font/local";

export const sfProDisplay = localFont({
  src: [
    {
      path: "./SF-Pro.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./SF-Pro-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-sf-pro-display",
  display: "swap",
});
