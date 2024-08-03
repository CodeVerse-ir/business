import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: " دانشگاه علم و فرهنگ",
  description: "University of Science and Culture",
  icons: {
    icon: "/image/logo/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-Dana bg-gray-100 dark:bg-zinc-800">
        <Header />
        {children}
      </body>
    </html>
  );
}
