import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import AppContext from "@/components/AppContext";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Hot Pizza",
  description: "Order hot and delicious pizza...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
          <AppContext>
            <Toaster />
            <Header />
            {children}
            <footer className="text-center border-t text-xs text-gray-500 pt-3">
              &copy; 2024 All rights are reserved.
            </footer>
          </AppContext>
        </main>
      </body>
    </html>
  );
}
