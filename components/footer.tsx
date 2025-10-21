"use client";

import { useTheme } from "next-themes";

export default function Footer() {
        const { theme } = useTheme();

        return (
                <footer
                        className={`w-full py-6 mt-10 text-center transition-colors duration-300 ${theme === "dark"
                                        ? "bg-[#0b1d39] text-gray-300"
                                        : "bg-[#0b1d39] text-white"
                                }`}
                >
                        <div className="max-w-6xl mx-auto px-4">
                                <p className="text-sm md:text-base font-medium">
                                        © {new Date().getFullYear()} Rakim University. All rights reserved.
                                </p>
                                <p className="text-xs md:text-sm mt-1">
                                        Developed by{" "}
                                        <span className="font-semibold hover:underline cursor-pointer">
                                                Arif Almas
                                        </span>
                                </p>
                        </div>
                </footer>
        );
}
