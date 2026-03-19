import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

const features = [
  {
    icon: "📅",
    title: "Job Scheduling",
    desc: "Drag-and-drop scheduling with real-time team visibility. No more missed appointments or double-bookings.",
  },
  {
    icon: "📝",
    title: "Quoting & Estimates",
    desc: "Send professional quotes in minutes. Customers approve from their phone. You get notified instantly.",
  },
  {
    icon: "💳",
    title: "Invoicing & Payments",
    desc: "Powered by Stripe. Get paid online, in the field, or on invoice. No extra processor fees.",
  },
  {
    icon: "👥",
    title: "Customer Management",
    desc: "Full job history, notes, photos, and contacts in one place. Know your customers before you knock.",
  },
  {
    icon: "🔧",
    title: "Unlimited Team Members",
    desc: "Add your whole crew — techs, admins, office staff — for free. We don't charge per seat.",
  },
  {
    icon: "📱",
    title: "Mobile-Ready",
    desc: "Works great on any device. Your team in the field gets the same experience as the office.",
  },
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
  "And more...",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="ToolbagCRM" width={48} height={48} />
            <span className="text-xl font-bold">
              <span className="text-blue-700">Toolbag</span>
              <span className="text-orange-500">CRM</span>
            </span>
          </div>
          <a
            href="#waitlist"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
          >
            Join the Waitlist
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            🚀 Now accepting waitlist signups
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            The CRM Built for Contractors Who{" "}
            <span className="text-orange-400">Outgrow Everything Else</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Schedule jobs. Quote fast. Get paid. Grow without paying per seat.
          </p>
          <WaitlistForm />
          <p className="text-blue-300 text-sm mt-4">
            Free until your first job is booked. No contracts. No surprises.
          </p>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-gray-900">
              Stop Paying{" "}
              <span className="text-orange-500">Per Seat</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most field service software charges you more as you grow. Add a
              tech? Pay more. Add an admin? Pay more. ToolbagCRM flips that
              model.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <div className="text-2xl mb-3">😤</div>
              <h3 className="font-bold text-lg text-red-700 mb-2">
                The Old Model (Jobber, etc.)
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>❌ Pay per user, every month</li>
                <li>❌ Hire one tech, bill goes up</li>
                <li>❌ Locked into tiers to get basic features</li>
                <li>❌ Pricing designed to penalize growth</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <div className="text-2xl mb-3">🎉</div>
              <h3 className="font-bold text-lg text-blue-700 mb-2">
                The ToolbagCRM Model
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✅ Unlimited users, always</li>
                <li>✅ Pricing based on volume of work</li>
                <li>✅ Free until you book your first job</li>
                <li>✅ If you don't make money, we don't charge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Everything Your Crew Needs.{" "}
              <span className="text-blue-700">Nothing You Don't.</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Built for field service teams from day one — not bolted on after.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-4 bg-blue-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Free Until Your First Job.{" "}
            <span className="text-orange-400">Then We Grow Together.</span>
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            We don't make money until you make money. Our pricing is based on
            your volume of work — not how many people are on your team.
          </p>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8 max-w-sm mx-auto">
            <div className="text-5xl font-black text-orange-400 mb-2">$0</div>
            <div className="text-white font-semibold text-lg mb-1">
              Until your first booking
            </div>
            <div className="text-blue-200 text-sm mb-6">
              Then a simple volume-based fee. The more you earn, the fairer it
              gets.
            </div>
            <a
              href="#waitlist"
              className="block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Get Early Access
            </a>
          </div>
          <p className="text-blue-300 text-sm mt-6">
            Pricing details announced at launch. Early waitlist members get
            locked-in rates.
          </p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Built for the{" "}
            <span className="text-orange-500">Trades</span>
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
            Whether you're running a two-person plumbing shop or a 50-tech HVAC
            company, ToolbagCRM scales with you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="bg-white border border-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-full text-sm shadow-sm"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to Ditch the Per-Seat Tax?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join the waitlist and be the first to know when ToolbagCRM launches.
            Early members get locked-in pricing.
          </p>
          <WaitlistForm />
          <p className="text-gray-500 text-sm mt-4">
            No spam. No contracts. Just early access.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-500 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="ToolbagCRM" width={28} height={28} />
            <span className="font-bold">
              <span className="text-blue-400">Toolbag</span>
              <span className="text-orange-400">CRM</span>
            </span>
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <a
              href="https://github.com/TSCarterJr/toolbagcrm-marketing"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
          <div>© {new Date().getFullYear()} ToolbagCRM. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
