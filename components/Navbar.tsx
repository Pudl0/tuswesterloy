"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#documents", label: "Dokumente" },
    { href: "/fussball", label: "Fußball" },
    { href: "/hallensport", label: "Hallensport" },
    { href: "/flag-football", label: "Flag Football" },
    { href: "/sponsoren", label: "Sponsoren" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/95 shadow-md backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105 md:gap-3">
          <Image
            src="/images/tus_logo.png"
            alt="TuS Westerloy e.V. Logo"
            width={50}
            height={50}
            className="h-[50px] w-[50px] rounded-full object-cover md:h-[60px] md:w-[60px]"
            priority
          />
          <span className="text-lg font-bold text-primary md:text-xl lg:text-2xl">
            TuS Westerloy
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-4 lg:flex xl:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary xl:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-foreground transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-white/95 backdrop-blur-sm lg:hidden">
          <div className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-base font-medium text-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
