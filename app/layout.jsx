import { Assistant } from "next/font/google";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";

const assistantFont = Assistant({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "CarboTrade",
    description: "Most popular portal to trade carbon credits",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${assistantFont.className} antialiased`}>
                <ToastContainer/>
                {children}
            </body>
        </html>
    );
}
