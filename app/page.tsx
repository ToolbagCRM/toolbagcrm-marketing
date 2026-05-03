import Image from "next/image";
import Link from "next/link";
import VideoSection from "./VideoSection";
import {
  Calendar,
  FileText,
  CreditCard,
  Users,
  Wrench,
  Smartphone,
  Check,
  X,
  ArrowRight,
  Puzzle,
  Paintbrush,
  Globe,
  Zap,
  Minus,
} from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Marquee } from "@/components/ui/marquee";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";

const features = [
  {
    icon: Calendar,
    title: "Job Scheduling",
    desc: "Drag-and-drop scheduling with real-time team visibility. No more missed appointments or double-bookings.",
  },
  {
    icon: FileText,
    title: "Quoting & Estimates",
    desc: "Send professional quotes in minutes. Customers approve from their phone. You get notified instantly.",
  },
  {
    icon: CreditCard,
    title: "Invoicing & Payments",
    desc: "Powered by Stripe. Get paid online, in the field, or on invoice. No extra processor fees.",
  },
  {
    icon: Users,
    title: "Customer Management",
    desc: "Full job history, notes, photos, and contacts in one place. Know your customers before you knock.",
  },
  {
    icon: Wrench,
    title: "Unlimited Team Members",
    desc: "Add your whole crew — techs, admins, office staff — for free. We don't charge per seat.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Ready",
    desc: "Works great on any device. Your team in the field gets the same experience as the office.",
  },
];

const modules = [
  "AI Estimating",
  "Fleet Tracking",
  "Inventory",
  "Route Optimization",
  "Time Tracking",
  "Photo Reports",
  "Customer Portal",
  "Recurring Jobs",
  "Subcontractors",
];

const industries = [
  "Plumbing",
  "HVAC",
  "Electrical",
  "Landscaping",
  "General Contracting",
  "Roofing",
  "Painting",
  "Pest Control",
  "Cleaning Services",
  "Pool & Spa",
  "Appliance Repair",
  "Fencing",
  "Garage Doors",
  "Concrete",
  "Tree Service",
  "Bathtub Refinishing",
  "Window Cleaning",
  "Pressure Washing",
  "Carpet Cleaning",
  "Junk Removal",
  "Moving Services",
  "Mobile Dog Grooming",
  "Handyman",
  "Security Installation",
  "Property Maintenance",
  "Floor Refinishing",
  "Gutter Cleaning",
  "Chimney Sweep",
  "Drywall & Plastering",
  "Photography",
  "Event Services",
  "Personal Training",
];

type CompareValue = boolean | "partial";

const comparisons: { feature: string; sub: string; toolbag: CompareValue; jobber: CompareValue; hcp: CompareValue; st: CompareValue }[] = [
  {
    feature: "Flat monthly pricing",
    sub: "One plan, no surprises",
    toolbag: true,
    jobber: false,
    hcp: false,
    st: false,
  },
  {
    feature: "Unlimited users included",
    sub: "No per-seat charges, ever",
    toolbag: true,
    jobber: false,
    hcp: false,
    st: false,
  },
  {
    feature: "Full custom branding",
    sub: "Your logo, colors, and identity",
    toolbag: true,
    jobber: "partial",
    hcp: "partial",
    st: "partial",
  },
  {
    feature: "Your own domain",
    sub: "e.g. portal.yourbusiness.com",
    toolbag: true,
    jobber: false,
    hcp: false,
    st: false,
  },
  {
    feature: "Free until first booking",
    sub: "We don't earn until you do",
    toolbag: true,
    jobber: false,
    hcp: false,
    st: false,
  },
  {
    feature: "Any home service trade",
    sub: "Not locked to one industry",
    toolbag: true,
    jobber: "partial",
    hcp: "partial",
    st: "partial",
  },
  {
    feature: "Customers see your brand",
    sub: "Not ours",
    toolbag: true,
    jobber: false,
    hcp: false,
    st: false,
  },
];

function CompareCell({ value }: { value: boolean | "partial" }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-emerald-500/15 flex items-center justify-center">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
        </div>
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center">
          <Minus className="w-3.5 h-3.5 text-yellow-500/70" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
        <X className="w-3 h-3 text-gray-600" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="ToolbagCRM" width={40} height={40} />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-[#1d4ed8]">Toolbag</span>
              <span className="text-[#f97316]">CRM</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            {[
              { href: "#how-it-works", label: "How It Works" },
              { href: "#branding", label: "Branding" },
              { href: "#features", label: "Features" },
              { href: "#compare", label: "Compare" },
              { href: "#pricing", label: "Pricing" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hidden lg:inline-flex text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#waitlist"
              className="ml-2 bg-[#1d4ed8] hover:bg-[#1e3a8a] text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <AnimatedShaderHero
        trustBadge={{
          text: "Now accepting early signups",
          icons: ["✨"]
        }}
        headline={{
          line1: "The CRM that doesn't",
          line2: "punish you for growing"
        }}
        subtitle="Schedule jobs. Send quotes. Get paid. Add your whole crew without watching the bill go up. Built for home service businesses, not enterprises."
        buttons={{
          primary: {
            text: "Join the Waitlist",
            href: "/waitlist"
          },
          secondary: {
            text: "Explore Features",
            href: "#features"
          }
        }}
      />

      {/* PROBLEM / SOLUTION */}
      <section className="py-24 sm:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[#f97316] font-semibold text-sm uppercase tracking-widest mb-3">
              The pricing problem
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-5">
              Stop paying per seat
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Most field service software charges you more as you grow. Add a
              tech? Pay more. Add an admin? Pay more. That model is broken.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            <FadeIn delay={0.1} direction="left">
              <div className="bg-red-50/80 border border-red-100 rounded-2xl p-8 h-full">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center mb-5">
                  <X className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  The old model
                </h3>
                <ul className="text-gray-600 space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>Pay per user, every month, forever</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>Hire one tech, your bill goes up $50/mo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>Locked into tiers just to get basic features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>Pricing designed to penalize growth</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="right">
              <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1d4ed8]/5 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-[#1d4ed8]/10 flex items-center justify-center mb-5">
                    <Check className="w-5 h-5 text-[#1d4ed8]" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-4">
                    The ToolbagCRM model
                  </h3>
                  <ul className="text-gray-600 space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#1d4ed8] mt-0.5 shrink-0" />
                      <span>One flat monthly plan — unlimited users included</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#1d4ed8] mt-0.5 shrink-0" />
                      <span>Works for any home service business</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#1d4ed8] mt-0.5 shrink-0" />
                      <span>Free until you book your first job</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#1d4ed8] mt-0.5 shrink-0" />
                      <span>If you don&apos;t make money, we don&apos;t charge</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
            {[
              { value: "$0", label: "Per-seat fees, ever", accent: true },
              { value: "∞", label: "Team members included", accent: false },
              { value: "30+", label: "Service trade types", accent: true },
              { value: "Free", label: "Until your first booking", accent: false },
            ].map((stat) => (
              <div key={stat.label} className="px-8 py-8 text-center">
                <div className={`text-4xl lg:text-5xl font-black mb-1.5 ${stat.accent ? "text-[#f97316]" : "text-white"}`}>
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 sm:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[#1d4ed8] font-semibold text-sm uppercase tracking-widest mb-3">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-5">
              Up and running{" "}
              <span className="text-[#1d4ed8]">in an afternoon.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              No onboarding calls. No IT department. No six-month implementation.
              Your branded platform goes live today.
            </p>
          </FadeIn>

          <div className="relative grid sm:grid-cols-3 gap-8 lg:gap-12">
            {/* Connecting line */}
            <div className="hidden sm:block absolute top-10 left-[calc(16.666%+20px)] right-[calc(16.666%+20px)] h-px"
              style={{ background: "linear-gradient(90deg, transparent, #1d4ed840, #1d4ed880, #1d4ed840, transparent)" }}
            />

            {[
              {
                step: "01",
                icon: Wrench,
                title: "Create your workspace",
                desc: "Sign up free — no credit card, no contracts. Your account is live in minutes. Free until you book your first job.",
                color: "bg-[#1d4ed8]",
              },
              {
                step: "02",
                icon: Paintbrush,
                title: "Make it 100% yours",
                desc: "Upload your logo, pick your brand colors, connect your domain. Your customers will never see the words ToolbagCRM.",
                color: "bg-[#f97316]",
              },
              {
                step: "03",
                icon: Zap,
                title: "Get to work",
                desc: "Schedule jobs, send quotes, collect payments. Your team, your customers, your brand — all in one place.",
                color: "bg-[#1d4ed8]",
              },
            ].map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.15}>
                <div className="text-center sm:text-left">
                  <div className="relative inline-flex sm:flex items-center justify-center sm:justify-start mb-5">
                    <div className={`w-11 h-11 rounded-xl ${step.color} flex items-center justify-center relative z-10 shadow-lg`}
                      style={{ boxShadow: step.color.includes("f97316") ? "0 4px 20px rgba(249,115,22,0.35)" : "0 4px 20px rgba(29,78,216,0.35)" }}
                    >
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 sm:right-auto sm:-left-3 text-[10px] font-black text-gray-300 bg-gray-100 rounded-full w-5 h-5 flex items-center justify-center leading-none">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <VideoSection />

      {/* YOUR PLATFORM SECTION */}
      <section id="branding" className="py-24 sm:py-32 px-4 bg-gray-950 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              <Globe className="w-3.5 h-3.5" />
              White Label &amp; Custom Domain
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-5">
              Your customers think you built{" "}
              <span className="text-[#f97316]">a custom platform.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Every quote, invoice, customer portal, and scheduling link carries your
              brand — your logo, your colors, your domain. ToolbagCRM is invisible to
              everyone except you.
            </p>
          </FadeIn>

          {/* Three branded instances */}
          <StaggerContainer className="grid sm:grid-cols-3 gap-5 mb-16" staggerDelay={0.1}>
            {/* Instance 1 — Premier Home Services */}
            <StaggerItem>
              <div className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-3 py-2.5 border-b border-gray-800 bg-gray-900/80">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                  </div>
                  <div className="flex-1 bg-gray-800 rounded px-2 py-0.5 text-[9px] text-gray-500 text-center truncate">
                    portal.premierhomeservices.com
                  </div>
                </div>
                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-[#1d4ed8] flex items-center justify-center text-[10px] font-black text-white">P</div>
                    <div>
                      <div className="text-white text-xs font-bold leading-tight">Premier Home Services</div>
                      <div className="text-gray-500 text-[9px]">Plumbing &amp; HVAC</div>
                    </div>
                  </div>
                  <div className="bg-gray-800/80 rounded-xl p-3 mb-2 border border-gray-700/50">
                    <div className="text-[9px] text-gray-500 mb-0.5">Invoice #2847</div>
                    <div className="text-white text-xs font-semibold mb-1">Water heater replacement</div>
                    <div className="text-[#1d4ed8] font-black text-base">$1,450</div>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-2 text-center">
                    <div className="text-emerald-400 text-[9px] font-semibold flex items-center justify-center gap-1">
                      <Check className="w-2.5 h-2.5" /> Paid — Thank you!
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Instance 2 — Sparkle Clean Co. */}
            <StaggerItem>
              <div className="rounded-2xl overflow-hidden border border-teal-900/40 bg-gray-900 shadow-2xl ring-1 ring-teal-500/10">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-3 py-2.5 border-b border-teal-900/30 bg-gray-900/80">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                  </div>
                  <div className="flex-1 bg-gray-800 rounded px-2 py-0.5 text-[9px] text-gray-500 text-center truncate">
                    book.sparkleclean.co
                  </div>
                </div>
                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-teal-500 flex items-center justify-center text-[10px] font-black text-white">SC</div>
                    <div>
                      <div className="text-white text-xs font-bold leading-tight">Sparkle Clean Co.</div>
                      <div className="text-gray-500 text-[9px]">Residential Cleaning</div>
                    </div>
                  </div>
                  <div className="bg-gray-800/80 rounded-xl p-3 mb-2 border border-gray-700/50">
                    <div className="text-[9px] text-gray-500 mb-0.5">Upcoming Job — Tue May 6</div>
                    <div className="text-white text-xs font-semibold mb-1">Deep clean — 3 bed/2 bath</div>
                    <div className="text-teal-400 font-black text-base">$280</div>
                  </div>
                  <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-2 text-center">
                    <div className="text-teal-400 text-[9px] font-semibold flex items-center justify-center gap-1">
                      <Check className="w-2.5 h-2.5" /> Booking confirmed
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Instance 3 — GreenWorks Landscaping */}
            <StaggerItem>
              <div className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-3 py-2.5 border-b border-gray-800 bg-gray-900/80">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                  </div>
                  <div className="flex-1 bg-gray-800 rounded px-2 py-0.5 text-[9px] text-gray-500 text-center truncate">
                    jobs.greenworkslandscaping.com
                  </div>
                </div>
                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-green-600 flex items-center justify-center text-[10px] font-black text-white">GW</div>
                    <div>
                      <div className="text-white text-xs font-bold leading-tight">GreenWorks Landscaping</div>
                      <div className="text-gray-500 text-[9px]">Lawn &amp; Garden Services</div>
                    </div>
                  </div>
                  <div className="bg-gray-800/80 rounded-xl p-3 mb-2 border border-gray-700/50">
                    <div className="text-[9px] text-gray-500 mb-0.5">Quote #0551 — Awaiting approval</div>
                    <div className="text-white text-xs font-semibold mb-1">Spring cleanup + mulching</div>
                    <div className="text-green-400 font-black text-base">$620</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-2 text-center">
                    <div className="text-gray-400 text-[9px] font-semibold">Tap to approve quote →</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Bottom callout */}
          <FadeIn delay={0.3}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-center">
              <p className="text-gray-300 text-lg font-medium mb-2">
                Three different businesses. Three completely different brands.
              </p>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Same powerful platform underneath — none of them look like they&apos;re using the same software.
                Because to your customers, you built this yourself.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                {[
                  { icon: Paintbrush, label: "Your logo & colors" },
                  { icon: Globe, label: "Your own domain" },
                  { icon: FileText, label: "Branded quotes & invoices" },
                  { icon: Users, label: "Your customer portal" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-gray-400 text-sm">
                    <item.icon className="w-4 h-4 text-[#f97316]" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 sm:py-32 px-4 bg-gray-50/80">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[#1d4ed8] font-semibold text-sm uppercase tracking-widest mb-3">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-5">
              Everything your crew needs.{" "}
              <span className="text-[#1d4ed8]">Nothing you don&apos;t.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Built for field service teams from day one. Not bolted on after the
              fact by people who&apos;ve never been on a job site.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="group bg-white border border-gray-100 rounded-2xl p-6 h-full hover:border-[#1d4ed8]/20 hover:shadow-lg hover:shadow-[#1d4ed8]/5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#1d4ed8]/8 flex items-center justify-center mb-4 group-hover:bg-[#1d4ed8]/12 transition-colors">
                    <f.icon className="w-5 h-5 text-[#1d4ed8]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* PLUGIN ECOSYSTEM */}
          <FadeIn delay={0.2} className="mt-12">
            <div className="relative bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#f97316]/5 to-[#1d4ed8]/5 rounded-full blur-3xl" />
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1d4ed8]/10 to-[#f97316]/10 flex items-center justify-center shrink-0">
                  <Puzzle className="w-7 h-7 text-[#1d4ed8]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Dozens of add-on modules
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    From AI-powered estimating to fleet tracking, inventory, and
                    route optimization. Most modules included free. Turn on what
                    you need, ignore the rest.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {modules.map((m) => (
                      <span
                        key={m}
                        className="bg-gray-50 border border-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {m}
                      </span>
                    ))}
                    <span className="text-gray-400 px-3 py-1 text-xs font-medium">
                      and more...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section id="compare" className="py-24 sm:py-32 px-4 bg-gray-950 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-[#f97316] font-semibold text-sm uppercase tracking-widest mb-3">
              How we compare
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5">
              We built what they{" "}
              <span className="text-[#f97316]">wouldn&apos;t.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              The big players charge more as you grow, show their branding to your customers, and lock you to a generic domain. We don&apos;t.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border border-gray-800">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left px-6 py-5 text-gray-500 text-sm font-medium w-[40%]" />
                    <th className="px-4 py-5 text-center w-[15%]">
                      <div className="inline-flex flex-col items-center gap-1">
                        <div className="bg-[#f97316] text-white text-[10px] font-black px-2 py-0.5 rounded-full tracking-wider uppercase">
                          Us
                        </div>
                        <span className="text-white font-bold text-sm">ToolbagCRM</span>
                      </div>
                    </th>
                    <th className="px-4 py-5 text-center text-gray-500 text-sm font-medium w-[15%]">Jobber</th>
                    <th className="px-4 py-5 text-center text-gray-500 text-sm font-medium w-[15%]">HouseCallPro</th>
                    <th className="px-4 py-5 text-center text-gray-500 text-sm font-medium w-[15%]">ServiceTitan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/60">
                  {comparisons.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? "bg-gray-900/30" : ""}
                    >
                      <td className="px-6 py-4">
                        <div className="text-gray-200 text-sm font-medium">{row.feature}</div>
                        <div className="text-gray-600 text-xs mt-0.5">{row.sub}</div>
                      </td>
                      <td className="px-4 py-4 bg-[#f97316]/4">
                        <CompareCell value={row.toolbag} />
                      </td>
                      <td className="px-4 py-4">
                        <CompareCell value={row.jobber} />
                      </td>
                      <td className="px-4 py-4">
                        <CompareCell value={row.hcp} />
                      </td>
                      <td className="px-4 py-4">
                        <CompareCell value={row.st} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 text-xs text-center mt-4">
              Competitor features based on publicly available information as of 2025. &ldquo;Partial&rdquo; indicates limited or add-on functionality.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 sm:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1d4ed8] to-[#1e3a8a]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative max-w-3xl mx-auto text-center text-white">
          <FadeIn>
            <p className="text-[#f97316] font-semibold text-sm uppercase tracking-widest mb-3">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-5">
              Free until your first job.{" "}
              <span className="text-[#f97316]">Then we grow together.</span>
            </h2>
            <p className="text-blue-100/70 text-lg mb-12 max-w-xl mx-auto">
              We don&apos;t make money until you make money. One flat monthly
              plan — bring your whole team, no per-seat fees, ever.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-10 max-w-sm mx-auto">
              <div className="text-6xl font-black text-[#f97316] mb-1">$0</div>
              <div className="text-white font-semibold text-lg mb-2">
                Until your first booking
              </div>
              <div className="text-blue-200/60 text-sm mb-8">
                Pricing details at launch. Early members get locked-in rates.
              </div>
              <Link href="/waitlist">
                <ShimmerButton
                  background="rgba(249, 115, 22, 1)"
                  shimmerColor="rgba(255, 255, 255, 0.4)"
                  shimmerSize="0.08em"
                  borderRadius="9999px"
                  className="w-full px-6 py-4 text-base font-bold"
                >
                  Get Early Access
                </ShimmerButton>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-blue-200/50 text-sm mt-8">
              Early waitlist members get locked-in pricing when we launch.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 sm:py-32 px-4 bg-gray-50/80">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-[#f97316] font-semibold text-sm uppercase tracking-widest mb-3">
              Any service, any trade
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-5">
              If you show up and do the work,{" "}
              <span className="text-[#f97316]">this is for you.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              ToolbagCRM works for any home or field service business — from a one-person bathtub refinishing operation to a 50-tech HVAC company.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Marquee pauseOnHover className="[--duration:40s]">
              {industries.map((ind) => (
                <div
                  key={ind}
                  className="bg-white border border-gray-100 text-gray-700 font-semibold px-5 py-2.5 rounded-full text-sm shadow-sm hover:border-[#1d4ed8]/30 hover:shadow-md transition-all cursor-default"
                >
                  {ind}
                </div>
              ))}
            </Marquee>
            <Marquee pauseOnHover reverse className="[--duration:35s] mt-3">
              {[...industries].reverse().map((ind) => (
                <div
                  key={ind + "-r"}
                  className="bg-white border border-gray-100 text-gray-700 font-semibold px-5 py-2.5 rounded-full text-sm shadow-sm hover:border-[#f97316]/30 hover:shadow-md transition-all cursor-default"
                >
                  {ind}
                </div>
              ))}
            </Marquee>
          </FadeIn>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section id="waitlist" className="py-24 sm:py-32 px-4 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1d4ed8]/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-5">
              Ready to ditch the per-seat tax?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Join the waitlist and be first in line when ToolbagCRM launches.
              Early members get locked-in pricing.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="flex flex-col items-center gap-4">
            <Link href="/waitlist">
              <ShimmerButton
                background="rgba(249, 115, 22, 1)"
                shimmerColor="rgba(255, 255, 255, 0.4)"
                shimmerSize="0.08em"
                borderRadius="9999px"
                className="px-8 py-4 text-base font-bold shadow-xl shadow-orange-500/25"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </ShimmerButton>
            </Link>
            <p className="text-gray-500 text-sm">
              Free until your first job. No contracts. No surprises.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 border-t border-gray-800/50 text-gray-500 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="ToolbagCRM" width={24} height={24} />
            <span className="font-bold tracking-tight">
              <span className="text-[#1d4ed8]">Toolbag</span>
              <span className="text-[#f97316]">CRM</span>
            </span>
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
          <div>© {new Date().getFullYear()} ToolbagCRM. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
