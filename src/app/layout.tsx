import "@radix-ui/themes/styles.css";
import "../app/globals.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fabian Portfolio",
  description: "Portfolio of Fabian Fernandez, showcasing projects, certifications, and contact information.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="blue" grayColor="mauve" radius="medium">
          <Navbar />
          <main className="max-w-4xl mx-auto p-4 sm:p-8">{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}