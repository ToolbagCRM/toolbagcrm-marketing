import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join the Waitlist — ToolbagCRM",
  description:
    "Get early access to ToolbagCRM — the field service CRM built for contractors who outgrow Jobber. Free until your first job.",
};

const FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdApzeGYj7a2ywl2STR5QUuTFk_oek8w2z--AlANybkCLY_OA/viewform?embedded=true";

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* NAV — white, matches main site */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image src="/logo.png" alt="ToolbagCRM" width={40} height={40} />
            <span className="text-xl font-bold">
              <span className="text-blue-700">Toolbag</span>
              <span className="text-orange-500">CRM</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </nav>

      {/* HERO STRIP */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-black mb-3">
            Get Early Access
          </h1>
          <p className="text-blue-200 text-lg">
            Free until your first job. Tell us about your business and we&apos;ll
            be in touch when we launch.
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <iframe
            src={FORM_EMBED_URL}
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="ToolbagCRM Early Access Waitlist"
            className="block"
          >
            Loading…
          </iframe>
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">
          Early waitlist members get locked-in launch pricing.
        </p>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-500 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="ToolbagCRM" width={24} height={24} />
            <span className="font-bold">
              <span className="text-blue-400">Toolbag</span>
              <span className="text-orange-400">CRM</span>
            </span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <div>© {new Date().getFullYear()} ToolbagCRM. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
