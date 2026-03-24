import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import CodeBackground from "@/components/CodeBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mukul Vyas | Aspiring ML Engineer",
  description:
    "Aspiring Machine Learning Engineer exploring LLMs, NLP, and building real-world AI systems.",
  keywords: ["Machine Learning", "AI", "LLMs", "NLP", "Python", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <CodeBackground />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
