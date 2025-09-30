import { DM_Sans } from "next/font/google";
import "./globals.scss";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
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
        className={`${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
