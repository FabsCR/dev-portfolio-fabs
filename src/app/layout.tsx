import "@radix-ui/themes/styles.css";
import "../app/globals.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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