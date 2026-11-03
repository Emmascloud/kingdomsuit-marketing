"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowUpRight,
  LogIn,
  MessageCircle
} from "lucide-react";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ||
  "https://kingdomsuit.vercel.app";

const WHATSAPP_URL =
  "https://wa.me/2348068539769?text=Hello%20KingdomSuit%2C%20I%20would%20like%20to%20know%20more%20about%20your%20church%20management%20platform.";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Platform", href: "#platform" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" }
];

export default function MarketingHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050b18]/95 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="#home"
          className="flex shrink-0 items-center gap-3"
          aria-label="KingdomSuit home"
          onClick={() => setOpen(false)}
        >
          <img
            src="/icons/logo-mark.png"
            alt="KingdomSuit"
            width={42}
            height={42}
            className="h-10 w-10 rounded-xl object-contain"
          />
          <span className="leading-tight">
            <span className="block text-lg font-black tracking-tight">
              KingdomSuit
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.19em] text-blue-300">
              Ministry Management
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`${APP_URL}/login`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-white"
          >
            <LogIn size={16} />
            Sign in
          </a>
          <a
            href={`${APP_URL}/onboarding/church`}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-500"
          >
            Create account
            <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#071226] px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-200 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href={`${APP_URL}/login`}
              className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 px-3 text-sm font-semibold text-white"
            >
              <LogIn size={16} />
              Sign in
            </a>
            <a
              href={`${APP_URL}/onboarding/church`}
              className="flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-3 text-sm font-bold text-white"
            >
              Get started
            </a>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-600/15 text-sm font-semibold text-emerald-300"
          >
            <MessageCircle size={17} />
            Chat with us on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
