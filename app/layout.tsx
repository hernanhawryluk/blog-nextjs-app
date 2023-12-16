import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ThemeContextProvider from "@/context/theme-context";
import AuthProvider from "@/providers/auth-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
  description: "Portfolio Blog App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90 `}
      >
        <AuthProvider>
          <ThemeContextProvider>
            <Toaster position="top-right" reverseOrder={false} />
            <Navbar />
            <div className="px-[6%] sm:px-[15%]">{children}</div>
            <Footer />
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
