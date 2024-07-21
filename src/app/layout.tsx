/** @format */

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "connect",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${manrope.className} bg-auth-primary min-h-screen lg:px-6 px-2 lg:py-3.5 py-2`}
            >
                <div className='w-full bg-auth-secondary px-6 flex items-center lg:min-h-[97dvh] min-h-[98dvh] rounded-[20px]'>
                    <div className='max-w-[462px] w-full mx-auto'>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
