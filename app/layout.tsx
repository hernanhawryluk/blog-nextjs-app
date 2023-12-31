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
  title: "Coding Blog",
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
        className={`${inter.className} bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}
      >
        <AuthProvider>
          <ThemeContextProvider>
            <Toaster position="top-right" reverseOrder={false} />
            <div className="px-[6%] sm:px-[10%] 2xl:px-[15%]">
              <Navbar />
              {children}
              <Footer />
            </div>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
