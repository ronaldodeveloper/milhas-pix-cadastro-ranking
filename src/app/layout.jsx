import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.scss";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "MilhasPix | Compra e Venda de milhas com PIX garantido!",
  description: "MilhasPix | Compra e Venda de milhas com PIX garantido!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased ${plusJakartaSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
