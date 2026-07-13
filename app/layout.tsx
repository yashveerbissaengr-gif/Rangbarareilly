import type { Metadata } from "next";
import { Inter, Playfair_Display, Bodoni_Moda, Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GLINT | Small Sparks. Everyday.",
  description: "Premium minimal jewelry brand focused on timeless everyday pieces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${bodoni.variable} ${montserrat.variable} antialiased min-h-screen flex flex-col bg-glint-ivory`}>
        <CartProvider>
          <CartDrawer />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
