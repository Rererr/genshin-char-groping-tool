import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Genshin-Character-Grouping-Tool",
    description: "",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || '';
    return (
        <html lang="ja">
        <body className={inter.className}>{children}</body>
        <GoogleTagManager gtmId={gtmId}/>
        <GoogleAnalytics gaId={gtmId}/>
        </html>
    );
}
