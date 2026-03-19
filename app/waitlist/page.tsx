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
    <main className="min-h-screen bg-blue-700 text-white">
      {/* NAV */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <Image src="/logo.png" alt="ToolbagCRM" width={40} height={40} />
          <span className="text-xl font-bold">
            <span className="text-white">Toolbag</span>
            <span className="text-orange-400">CRM</span>
          </span>
        </Link>
        <Link
          href="/"
          className="text-blue-200 hover:text-white text-sm font-medium transition-colors"
        >
          ← Back to home
        </Link>
      </nav>

      {/* HEADER */}
      <div className="max-w-2xl mx-auto px-4 pt-10 pb-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-black mb-3">
          Get Early Access
        </h1>
        <p className="text-blue-200 text-lg">
          Free until your first job. Tell us about your business and we&apos;ll
          be in touch when we launch.
        </p>
      </div>

      {/* FORM EMBED */}
      <div className="max-w-2xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
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
        <p className="text-center text-blue-300 text-sm mt-4">
          Early waitlist members get locked-in launch pricing.
        </p>
      </div>
    </main>
  );
}
