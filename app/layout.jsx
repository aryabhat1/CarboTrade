import { Assistant } from "next/font/google";
import "./globals.css";

const assistantFont = Assistant({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
    display: "swap",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
    title: "CarboTrade",
    description: "Most popular portal to trade carbon credits",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${assistantFont.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
