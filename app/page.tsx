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
  ChevronRight,
} from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Marquee } from "@/components/ui/marquee";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { NumberTicker } from "@/components/ui/number-ticker";

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
];

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
          <div className="flex items-center gap-3">
            <Link
              href="#pricing"
              className="hidden sm:inline-flex text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link
              href="#features"
              className="hidden sm:inline-flex text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              href="#waitlist"
              className="bg-[#1d4ed8] hover:bg-[#1e3a8a] text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1d4ed8] via-[#1e3a8a] to-gray-900 text-white">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#f97316]/10 rounded-full blur-[120px]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
          <FadeIn className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sm font-medium px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
              <AnimatedShinyText className="text-white/90 text-sm" shimmerWidth={80}>
                Now accepting early signups
              </AnimatedShinyText>
              <ChevronRight className="w-3.5 h-3.5 text-white/60" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.08] tracking-tight mb-6">
              The CRM that doesn&apos;t
              <br />
              <span className="text-[#f97316]">punish you for growing</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} className="text-center">
            <p className="text-lg sm:text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
              Schedule jobs. Send quotes. Get paid. Add your whole crew without
              watching the bill go up. Built for contractors, not enterprises.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col items-center gap-4">
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
            <p className="text-blue-200/60 text-sm">
              Free until your first job is booked. No contracts.
            </p>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.5} className="mt-20">
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white">
                  $<NumberTicker value={0} className="text-white" />
                </div>
                <div className="text-blue-200/60 text-xs sm:text-sm mt-1">per seat, always</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-3xl sm:text-4xl font-black text-white">
                  <NumberTicker value={50} className="text-white" />+
                </div>
                <div className="text-blue-200/60 text-xs sm:text-sm mt-1">add-on modules</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white">
                  <NumberTicker value={12} className="text-white" />+
                </div>
                <div className="text-blue-200/60 text-xs sm:text-sm mt-1">trade verticals</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <VideoSection />

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
                      <span>Unlimited users, always included</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#1d4ed8] mt-0.5 shrink-0" />
                      <span>Pricing based on volume of work, not headcount</span>
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

      {/* WHITE LABEL */}
      <section className="py-24 sm:py-32 px-4 bg-gray-950 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
                  <Paintbrush className="w-3.5 h-3.5" />
                  White Label
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-5">
                  Your brand.
                  <br />
                  <span className="text-[#f97316]">Your business.</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Put your logo on everything. Your customers see your brand on
                  quotes, invoices, the portal, all of it. Look like a big
                  operation even if it&apos;s just you and a van.
                </p>
                <ul className="space-y-4">
                  {[
                    "Custom logo and color scheme across the entire platform",
                    "Branded estimates, invoices, and customer emails",
                    "Custom domain for your client portal (e.g. jobs.yourbusiness.com)",
                    "Professional presence without the enterprise price tag",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                      <div className="w-5 h-5 rounded-full bg-[#f97316]/20 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-[#f97316]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl shadow-black/50">
                {/* Mock browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="bg-gray-800 rounded-md px-3 py-1 text-xs text-gray-500 text-center">
                      jobs.acmehomeservices.com
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 bg-[#f97316] rounded-2xl mx-auto mb-3 flex items-center justify-center text-xl font-black text-white">
                      A
                    </div>
                    <div className="font-bold text-lg">ACME Home Services</div>
                    <div className="text-gray-500 text-xs mt-1">
                      Licensed &amp; Insured
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-800/80 rounded-xl p-4 text-sm border border-gray-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-gray-400 text-xs">
                          Quote #3107
                        </div>
                        <div className="text-xs text-gray-500">W. E. Coyote</div>
                      </div>
                      <div className="font-semibold mb-1">
                        Giant magnet installation — roof mount
                      </div>
                      <div className="text-[#f97316] font-bold text-lg">
                        $4,999
                      </div>
                    </div>

                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-center">
                      <div className="flex items-center justify-center gap-2 text-emerald-400 font-semibold text-sm">
                        <Check className="w-4 h-4" />
                        Approved by customer
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-gray-600 text-[10px] mt-5 uppercase tracking-widest">
                    Powered by ToolbagCRM
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
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
              We don&apos;t make money until you make money. Pricing is based on
              your volume of work, not how many people are on your team.
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
              Industries
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-5">
              Built for the <span className="text-[#f97316]">trades</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Whether you&apos;re running a two-person plumbing shop or a 50-tech
              HVAC company, ToolbagCRM scales with you.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Marquee pauseOnHover className="[--duration:30s]">
              {industries.map((ind) => (
                <div
                  key={ind}
                  className="bg-white border border-gray-100 text-gray-700 font-semibold px-5 py-2.5 rounded-full text-sm shadow-sm hover:border-[#1d4ed8]/30 hover:shadow-md transition-all cursor-default"
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
