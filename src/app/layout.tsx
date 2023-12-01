import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Font files can be colocated inside of `app`
const roboto = localFont({
  variable: "--font-roboto",
  display: "swap",
  src: [
    {
      path: "./../../public/fonts/Roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../public/fonts/Roboto/Roboto-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    // {
    //   path: "./Roboto-Bold.woff2",
    //   weight: "700",
    //   style: "normal",
    // },
    // {
    //   path: "./Roboto-BoldItalic.woff2",
    //   weight: "700",
    //   style: "italic",
    // },
  ],
});

const chelseaMarket = localFont({
  variable: "--font-chelsea-market",
  display: "swap",
  src: [
    {
      path: "./../../public/fonts/Chelsea_Market/ChelseaMarket-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${inter.variable} ${chelseaMarket.variable}`}
      >
        {children}

        <p className="font-primary">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
          natus. Deleniti totam repudiandae quibusdam dolore tempora
          consequuntur dicta architecto atque ab eum, ipsam repellendus quod
          delectus quisquam ratione sequi ea.
        </p>
        <p className="font-secondary">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
          natus. Deleniti totam repudiandae quibusdam dolore tempora
          consequuntur dicta architecto atque ab eum, ipsam repellendus quod
          delectus quisquam ratione sequi ea.
        </p>

        <p className="font-tertiary">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
          natus. Deleniti totam repudiandae quibusdam dolore tempora
          consequuntur dicta architecto atque ab eum, ipsam repellendus quod
          delectus quisquam ratione sequi ea.
        </p>
      </body>
    </html>
  );
}
