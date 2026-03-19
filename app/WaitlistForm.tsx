"use client";

import Link from "next/link";

export default function WaitlistForm({ className }: { className?: string }) {
  return (
    <div className={`max-w-md mx-auto text-center ${className ?? ""}`}>
      <Link
        href="/waitlist"
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg shadow-md"
      >
        Join the Waitlist →
      </Link>
      <p className="text-blue-200 text-sm mt-3">
        Free until your first job. No contracts. No surprises.
      </p>
    </div>
  );
}
