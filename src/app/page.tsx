import type { Metadata } from "next";
import Link from "next/link";
import MarketingHeader from "@/components/MarketingHeader";
import MarketingFooter from "@/components/MarketingFooter";
import {
  ArrowRight,
  Users,
  CalendarDays,
  HandCoins,
  ClipboardCheck,
  BookOpen,
  ShieldCheck,
  Building2,
  UserRoundCheck,
  ChartNoAxesCombined,
  CheckCircle2,
  Clock3,
  Smartphone,
  ChevronRight,
  Sparkles,
  Mail,
} from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://kingdomsuit.vercel.app";

export const metadata: Metadata = {
  title: "Church Management Software for African Churches",
  description:
    "Bring your church administration together with KingdomSuit. Manage members, attendance, giving, services, events and sermons in one organized ministry platform.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KingdomSuit | Church Management Made Easier",
    description:
      "One organized platform for church membership, attendance, services, events, sermons and giving.",
    url: "/",
    type: "website",
    images: ["/icons/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KingdomSuit | Church Management Made Easier",
    description:
      "Organize your church operations with one ministry management platform.",
    images: ["/icons/icon-512.png"],
  },
};

const features = [
  {
    icon: Users,
    title: "Church member management",
    description:
      "Keep member profiles and contact information organized. Give your authorized team a clearer way to manage church membership.",
    tag: "People",
  },
  {
    icon: ClipboardCheck,
    title: "Attendance tracking",
    description:
      "Record attendance at services and follow participation over time instead of relying on scattered paper records.",
    tag: "Participation",
  },
  {
    icon: HandCoins,
    title: "Giving and finance",
    description:
      "Support digital giving and organize church financial records with tools designed for authorized finance officers.",
    tag: "Stewardship",
  },
  {
    icon: CalendarDays,
    title: "Events and services",
    description:
      "Organize church events, plan service activities and keep your congregation informed about what is happening.",
    tag: "Planning",
  },
  {
    icon: BookOpen,
    title: "Sermons and resources",
    description:
      "Publish sermons and make ministry content available to members through your church platform.",
    tag: "Resources",
  },
  {
    icon: Building2,
    title: "Departments and branches",
    description:
      "Organize ministry teams and, on supported plans, manage branch churches within your wider ministry structure.",
    tag: "Organization",
  },
];

const audiences = [
  {
    title: "Church founders and general overseers",
    description:
      "Get a clearer view of church administration, leadership responsibilities and ministry organization.",
    icon: Building2,
  },
  {
    title: "Pastors and ministry leaders",
    description:
      "Coordinate services, events, sermons and the teams responsible for carrying out ministry activities.",
    icon: UserRoundCheck,
  },
  {
    title: "Church administrators",
    description:
      "Bring member records, attendance and everyday administrative work into one organized workspace.",
    icon: ClipboardCheck,
  },
  {
    title: "Finance officers",
    description:
      "Use supported giving and finance tools to organize church financial administration.",
    icon: ChartNoAxesCombined,
  },
];

const steps = [
  {
    number: "01",
    title: "Create your church account",
    description:
      "Enter your church details, create your administrator account and choose the plan that suits your ministry.",
  },
  {
    number: "02",
    title: "Set up your workspace",
    description:
      "Organize your church profile, add authorized team members and arrange your ministry structure.",
  },
  {
    number: "03",
    title: "Bring your team on board",
    description:
      "Share your member registration link and help your team begin using the relevant platform tools.",
  },
  {
    number: "04",
    title: "Manage your ministry",
    description:
      "Use KingdomSuit to support your church's membership, attendance, services, events and other activities.",
  },
];

const faqs = [
  {
    question: "What is KingdomSuit?",
    answer:
      "KingdomSuit is a church and ministry management platform that helps organize membership, attendance, services, events, sermons, giving and administrative activities in one digital workspace.",
  },
  {
    question: "Can my church get started for free?",
    answer:
      "Yes. KingdomSuit offers a Free plan. You can review the available plans and their features before choosing the option that suits your church.",
  },
  {
    question: "Can members register themselves?",
    answer:
      "Yes. Your church can share its member registration link or code so members can create their own accounts and provide their details.",
  },
  {
    question: "Can different church leaders have different permissions?",
    answer:
      "KingdomSuit supports role-based access for different church responsibilities. Access to particular features depends on the assigned role and account permissions.",
  },
  {
    question: "How does online giving work?",
    answer:
      "Churches can connect their own supported payment account through Paystack. Giving and finance features depend on the church's plan and configuration.",
  },
  {
    question: "Can a ministry with multiple branches use KingdomSuit?",
    answer:
      "Branch management is available on the supported Premium plan. Contact the KingdomSuit team if you need help understanding the available setup.",
  },
  {
    question: "How do we get started?",
    answer:
      "Select Create Your Church Account to open the church onboarding page. You can enter your church details, choose a plan and create your workspace.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
      {children}
    </p>
  );
}

function PrimaryLink({
  children,
  href = `${APP_URL}/onboarding/church`,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1730] p-4 shadow-2xl shadow-black/40 sm:p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
              <Building2 size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Church workspace</p>
              <p className="text-xs text-slate-400">Ministry overview</p>
            </div>
          </div>
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold text-emerald-300">
            Interface preview
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 py-5 sm:grid-cols-3">
          {[
            { icon: Users, label: "Members", color: "text-blue-300" },
            { icon: CalendarDays, label: "Services", color: "text-cyan-300" },
            { icon: HandCoins, label: "Giving", color: "text-emerald-300" },
          ].map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4"
            >
              <Icon size={19} className={color} />
              <p className="mt-3 text-xs text-slate-400">{label}</p>
              <div className="mt-2 h-2 w-16 rounded-full bg-white/10" />
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Ministry activities
              </p>
              <p className="mt-1 text-xs text-slate-400">
                An organized view of church operations
              </p>
            </div>
            <ChartNoAxesCombined size={20} className="text-blue-300" />
          </div>

          <div className="mt-5 space-y-4">
            {[
              { label: "Member records", width: "w-[90%]" },
              { label: "Service planning", width: "w-[75%]" },
              { label: "Church activities", width: "w-[82%]" },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex justify-between text-xs text-slate-400">
                  <span>{item.label}</span>
                  <CheckCircle2 size={14} className="text-emerald-400" />
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/[0.07]">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 ${item.width}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.035] p-3">
            <CalendarDays size={18} className="text-blue-300" />
            <span className="text-xs font-medium text-slate-300">
              Events and services
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.035] p-3">
            <BookOpen size={18} className="text-cyan-300" />
            <span className="text-xs font-medium text-slate-300">
              Sermon library
            </span>
          </div>
        </div>

        <p className="mt-4 text-center text-[10px] text-slate-500">
          Illustrative product interface — not live church data.
        </p>
      </div>

      <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#122344] p-4 shadow-xl sm:flex">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15">
          <ShieldCheck size={21} className="text-emerald-300" />
        </div>
        <div>
          <p className="text-xs font-bold text-white">Organized access</p>
          <p className="text-[10px] text-slate-400">Role-based permissions</p>
        </div>
      </div>
    </div>
  );
}

export default function ChurchManagementPage() {
  return (
    <>
      <MarketingHeader />
      <main className="overflow-hidden bg-[#050b18] text-white">
      {/* HERO */}
      <section id="home" className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_20%,rgba(37,99,235,0.22),transparent_45%),radial-gradient(ellipse_at_10%_80%,rgba(8,145,178,0.12),transparent_40%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-32 lg:pt-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold text-blue-200">
              <Sparkles size={14} />
              Ministry management, made clearer
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.8rem]">
              Your church deserves
              <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                better organization.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Bring your church membership, attendance, services, events,
              sermons and giving together in one organized ministry management
              platform. Less administrative confusion. More room to focus on
              ministry.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink>Create Your Church Account</PrimaryLink>
              <Link
                href={`${APP_URL}/pricing`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-400/50 hover:bg-white/[0.05]"
              >
                Explore plans
                <ChevronRight size={17} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400" />
                Free plan available
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-blue-400" />
                Role-based access
              </span>
              <span className="flex items-center gap-2">
                <Smartphone size={15} className="text-cyan-400" />
                Web and mobile experience
              </span>
            </div>
          </div>

          <DashboardPreview />
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="border-y border-white/[0.08] bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:px-8 md:grid-cols-4">
          {[
            ["Membership", "Organized member records"],
            ["Administration", "One ministry workspace"],
            ["Leadership", "Role-based responsibilities"],
            ["Giving", "Supported digital giving"],
          ].map(([title, description]) => (
            <div key={title}>
              <p className="text-sm font-bold text-white">{title}</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section id="features" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>A better way to manage ministry</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Church administration should not feel like a full-time struggle.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            When records are scattered across notebooks, spreadsheets and
            conversations, everyday coordination becomes harder than it needs
            to be. KingdomSuit brings supported ministry activities into one
            digital workspace.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Clock3,
              title: "Less scattered information",
              text: "Keep important church records and activities more organized instead of searching across disconnected sources.",
            },
            {
              icon: Users,
              title: "Clearer team coordination",
              text: "Give authorized leaders and administrators tools that support their different ministry responsibilities.",
            },
            {
              icon: ChartNoAxesCombined,
              title: "Better visibility",
              text: "Use available records, reports and dashboards to understand relevant church activities.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-blue-400/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                <Icon size={23} />
              </div>
              <h3 className="mt-6 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="platform" className="border-y border-white/[0.08] bg-[#091326]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <SectionLabel>The KingdomSuit platform</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              The tools your ministry needs, in one place.
            </h2>
            <p className="mt-5 leading-8 text-slate-400">
              Support the everyday work of your church with connected tools
              for people, services, communication and administration.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description, tag }) => (
              <article
                key={title}
                className="group rounded-2xl border border-white/[0.09] bg-[#0d1a30] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-[#10213d]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 transition group-hover:bg-blue-500/20">
                    <Icon size={23} />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    {tag}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-7 text-xs leading-6 text-slate-500">
            Available features and usage limits depend on the subscription
            plan and account permissions.
          </p>
        </div>
      </section>

      {/* AUDIENCE */}
      <section id="pricing" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionLabel>Designed around church teams</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              One platform. Different responsibilities. Shared purpose.
            </h2>
            <p className="mt-5 leading-8 text-slate-400">
              Church leadership involves many people working together.
              KingdomSuit supports the different responsibilities involved
              in managing a ministry.
            </p>
            <PrimaryLink>
              Set up your church
            </PrimaryLink>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <Icon size={23} className="text-blue-300" />
                <h3 className="mt-5 font-bold leading-6">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-y border-white/[0.08] bg-[#091326]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Getting started</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Your church workspace starts here.
            </h2>
            <p className="mt-5 leading-8 text-slate-400">
              Start with your church account and build your digital ministry
              workspace step by step.
            </p>
          </div>

          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-white/10 bg-[#0d1a30] p-6"
              >
                <span className="text-sm font-black tracking-widest text-blue-400">
                  {step.number}
                </span>
                <div className="my-5 h-px bg-gradient-to-r from-blue-500/60 to-transparent" />
                <h3 className="font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 text-center">
            <PrimaryLink>Start your church registration</PrimaryLink>
          </div>
        </div>
      </section>

      {/* PRICING CTA */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-950 via-[#10244a] to-[#0a1830] p-8 sm:p-12 lg:p-16">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <SectionLabel>Plans for your ministry</SectionLabel>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Start with what your church needs today.
              </h2>
              <p className="mt-5 leading-8 text-blue-100/70">
                Explore the available KingdomSuit plans. Begin with the Free
                plan or choose a paid plan when your ministry needs additional
                tools and capacity.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <PrimaryLink href={`${APP_URL}/pricing`}>Compare pricing plans</PrimaryLink>
              <Link
                href={`${APP_URL}/onboarding/church`}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Create church account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/[0.08] bg-[#091326]">
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
          <div className="text-center">
            <SectionLabel>Frequently asked questions</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Before you get started.
            </h2>
            <p className="mt-4 text-slate-400">
              A few answers to help you understand KingdomSuit.
            </p>
          </div>

          <div className="mt-12 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group bg-white/[0.02] p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-white marker:hidden">
                  <span>{faq.question}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-blue-300 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#050b18]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.2),transparent_65%)]" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-28">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
            <Building2 size={27} />
          </div>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Your ministry. Better organized.
          </p>
          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
            Take the next step in managing your church.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Create your KingdomSuit church account and bring your ministry's
            administration into one organized digital workspace.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryLink>Create Your Church Account</PrimaryLink>
            <a
              href="mailto:kingdomsuit85@gmail.com?subject=KingdomSuit%20Demo%20Enquiry"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
            >
              <Mail size={17} />
              Request a demo
            </a>
          </div>

          <p className="mt-7 text-xs text-slate-500">
            Questions? Email kingdomsuit85@gmail.com
          </p>
        </div>
      </section>
      </main>
      <MarketingFooter />
    </>
  );
}
