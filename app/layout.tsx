import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
};

const localRethink = localFont({
  src: [
    {
      path: "./fonts/Rethink/RethinkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Rethink/RethinkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Rethink/RethinkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Rethink/RethinkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Rethink/RethinkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Rethink/RethinkSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Rethink/RethinkSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Rethink/RethinkSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Rethink/RethinkSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Rethink/RethinkSans-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={localRethink.className}>{children}</body>
    </html>
  );
}
