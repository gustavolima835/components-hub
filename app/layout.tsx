import type { Metadata } from 'next'
import localFont from "next/font/local"
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

const localPoppins = localFont({
	src: [
		{
			path: "./fonts/Poppins/Poppins-Black.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "./fonts/Poppins/Poppins-BlackItalic.ttf",
			weight: "900",
			style: "italic",
		},
		{
			path: "./fonts/Poppins/Poppins-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/Poppins/Poppins-BoldItalic.ttf",
			weight: "700",
			style: "italic",
		},
		{
			path: "./fonts/Poppins/Poppins-ExtraBold.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "./fonts/Poppins/Poppins-ExtraBoldItalic.ttf",
			weight: "800",
			style: "italic",
		},
		{
			path: "./fonts/Poppins/Poppins-ExtraLight.ttf",
			weight: "200",
			style: "normal",
		},
		{
			path: "./fonts/Poppins/Poppins-ExtraLightItalic.ttf",
			weight: "200",
			style: "italic",
		},
		{
			path: "./fonts/Poppins/Poppins-Italic.ttf",
			weight: "400",
			style: "italic",
		},
		{
			path: "./fonts/Poppins/Poppins-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/Poppins/Poppins-LightItalic.ttf",
			weight: "300",
			style: "italic",
		},
		{
			path: "./fonts/Poppins/Poppins-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/Poppins/Poppins-MediumItalic.ttf",
			weight: "500",
			style: "italic",
		},
		{
			path: "./fonts/Poppins/Poppins-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/Poppins/Poppins-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/Poppins/Poppins-SemiBoldItalic.ttf",
			weight: "600",
			style: "italic",
		},
		{
			path: "./fonts/Poppins/Poppins-Thin.ttf",
			weight: "100",
			style: "normal",
		},
		{
			path: "./fonts/Poppins/Poppins-ThinItalic.ttf",
			weight: "100",
			style: "italic",
		},
	],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${localPoppins.className}`}>{children}</body>
    </html>
  )
}
