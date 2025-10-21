"use client";

import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { useTheme } from "next-themes";
import { Icons } from "./icons";

export function SiteFooter() {
  const { theme } = useTheme();

  return (
    <footer
      className="py-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center px-4">
        {/* Social Links */}
        <div className="mb-4 flex space-x-5">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:rakimuniversity@gmail.com"
            className="hover:opacity-80 transition-opacity"
          >
            <span className="sr-only">Mail</span>
            <Mail className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.twitter}
            className="hover:opacity-80 transition-opacity"
          >
            <span className="sr-only">Twitter</span>
            <Icons.twitter className="h-6 w-6" />
          </a>
        </div>

        {/* Author */}
        <div className="text-sm text-gray-300 mb-2">
          <a target="_blank" rel="noreferrer" href="#">
            {siteConfig.author}
          </a>
        </div>

        {/* Copyright & Developer */}
        <div className="text-center text-xs md:text-sm font-medium mt-2">
          <p>© {new Date().getFullYear()} Rakim University. All rights reserved.</p>
          <p className="mt-1">
            Developed by{" "}
            <span className="font-semibold hover:underline cursor-pointer">
              <a href="https://www.arifalmas.com/" target="blank"> Arif Almas</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
