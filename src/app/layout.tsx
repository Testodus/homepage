import { Inter, Inria_Serif } from "next/font/google";
import styles from "./layout.module.css";
import "./globals.css";

const inter = Inter({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inria_serif = Inria_Serif({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-inria-serif",
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${styles.body} ${inter.variable} ${inria_serif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
