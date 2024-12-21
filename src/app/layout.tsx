import { Inter, Inria_Serif } from "next/font/google";
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
      {/** 
        style={{
          background:
            "radial-gradient(200px 200px at 20% 10%, #ff3f6c, #ff4a9e, #ff62d1, #f27fff, #f9acff, #fed6ff, #ffffff)",
        }}
      */}
      <body
        style={{
          background: `radial-gradient(600px 600px at 10% 10%, 
             hsl(303deg 100% 79%) 0%,
    hsl(304deg 100% 80%) 18%,
    hsl(305deg 100% 82%) 26%,
    hsl(306deg 100% 83%) 33%,
    hsl(307deg 100% 84%) 39%,
    hsl(308deg 100% 86%) 44%,
    hsl(310deg 100% 87%) 50%,
    hsl(310deg 100% 89%) 56%,
    hsl(310deg 100% 91%) 61%,
    hsl(310deg 100% 94%) 67%,
    hsl(310deg 100% 96%) 74%,
    hsl(310deg 100% 98%) 82%,
    hsl(0deg 0% 100%) 90%,
    transparent 100%),
    radial-gradient(600px 600px at 80% 50%, 
             hsl(32deg 100% 79%) 0%,
    hsl(32deg 100% 80%) 18%,
    hsl(31deg 100% 82%) 26%,
    hsl(30deg 100% 83%) 33%,
    hsl(30deg 100% 84%) 39%,
    hsl(29deg 100% 86%) 44%,
    hsl(28deg 100% 87%) 50%,
    hsl(28deg 100% 89%) 56%,
    hsl(28deg 100% 91%) 61%,
    hsl(28deg 100% 93%) 67%,
    hsl(28deg 100% 96%) 74%,
    hsl(28deg 100% 98%) 82%,
    hsl(0deg 0% 100%) 90%,
    transparent 100%),
    radial-gradient(600px 600px at 10% 90%, 
             hsl(234deg 100% 79%) 0%,
    hsl(235deg 100% 80%) 18%,
    hsl(235deg 100% 82%) 26%,
    hsl(236deg 100% 83%) 33%,
    hsl(237deg 100% 84%) 39%,
    hsl(238deg 100% 86%) 44%,
    hsl(238deg 100% 87%) 50%,
    hsl(239deg 100% 89%) 56%,
    hsl(240deg 100% 91%) 61%,
    hsl(241deg 100% 94%) 67%,
    hsl(242deg 100% 96%) 74%,
    hsl(242deg 100% 98%) 82%,
    hsl(0deg 0% 100%) 90%,
    transparent 100%)
  `,
        }}
        className={`${inter.variable} ${inria_serif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
