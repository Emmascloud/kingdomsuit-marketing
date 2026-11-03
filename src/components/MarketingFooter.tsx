import Link from "next/link";
import {
  Mail,
  MessageCircle,
  ArrowUpRight,
  Heart
} from "lucide-react";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ||
  "https://kingdomsuit.vercel.app";

const WHATSAPP_URL =
  "https://wa.me/2348068539769?text=Hello%20KingdomSuit%2C%20I%20would%20like%20to%20make%20an%20enquiry.";

export default function MarketingFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#020817] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="#home" className="inline-flex items-center gap-3">
            <img
              src="/icons/logo-mark.png"
              alt="KingdomSuit logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-xl object-contain"
            />
            <span>
              <span className="block text-xl font-black">KingdomSuit</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300">
                Ministry Management
              </span>
            </span>
          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            Helping churches and ministries organize their people,
            activities and administration with one ministry management
            platform.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:kingdomsuit85@gmail.com?subject=KingdomSuit%20Enquiry"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
            >
              <Mail size={17} />
              Email us
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-500"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li><a className="hover:text-white" href="#features">Features</a></li>
            <li><a className="hover:text-white" href="#platform">Platform</a></li>
            <li><a className="hover:text-white" href="#how-it-works">How it works</a></li>
            <li><a className="hover:text-white" href="#pricing">Pricing</a></li>
            <li><a className="hover:text-white" href="#faq">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold">Your KingdomSuit account</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li>
              <a className="hover:text-white" href={`${APP_URL}/login`}>
                Sign in
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={`${APP_URL}/onboarding/church`}>
                Create church account
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={`${APP_URL}/pricing`}>
                View application pricing
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-1 hover:text-white"
                href="https://x.com/kingdomsuit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow us on X <ArrowUpRight size={14} />
              </a>
            </li>
          </ul>
          <p className="mt-5 break-all text-sm text-slate-400">
            kingdomsuit85@gmail.com
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} KingdomSuit. All rights reserved.</p>
          <p className="inline-flex items-center gap-1">
            Built to serve ministries with <Heart size={13} className="fill-current text-blue-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
