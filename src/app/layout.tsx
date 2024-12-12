
import AppBar from "@/components/Appbar";
import "./globals.css";
import Footer from "@/components/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div>
          <AppBar/>
        {children}
        </div>
        <Footer />
        <div id="portal" />
      </body>
    </html>
  );
}
