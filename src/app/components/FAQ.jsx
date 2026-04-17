"use client"
import { useState } from "react"
import Link from "next/link"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "How much does it cost?",
    a: "It depends on what you're building. A business website typically starts from £800–£2,000. A mobile app or custom software platform ranges from £3,000 upwards depending on complexity. We always give you a fixed price before we start — no surprise invoices.",
  },
  {
    q: "How long does it take?",
    a: "A website is usually live within 2–4 weeks. A mobile app or custom platform takes 6–12 weeks depending on the features. We'll give you a clear timeline on our first call.",
  },
  {
    q: "What technology do you build with?",
    a: "Our primary backend framework is Laravel (PHP), which we use for APIs, automation systems, admin panels, and complex platforms. For frontends and websites we use React and Next.js. For iOS apps we use SwiftUI. We also work with Node.js and can take over and manage whatever stack you're already running — whether that's Laravel, WordPress, PHP, or something else.",
  },
  {
    q: "Can you manage or improve my existing system?",
    a: "Yes — this is one of our most common engagements. If you have an existing website, app, or backend that needs improving, stabilising, or adding to, we can take it over. We start with a full audit, fix any critical issues, then manage it on a monthly retainer. We work with Laravel, PHP, Node.js, React, WordPress, and legacy codebases.",
  },
  {
    q: "How does your pricing and payment work?",
    a: "We agree a fixed price before we start — so you always know exactly what you're paying. Payments are structured in milestones tied to project stages. There are no surprise invoices and no scope creep charges.",
  },
  {
    q: "Will you support the project after launch?",
    a: "Yes. We offer ongoing monthly support and maintenance packages covering hosting, security updates, bug fixes, and continuous feature development. You're not left on your own after launch.",
  },
  {
    q: "Can you work with an idea I haven't fully figured out yet?",
    a: "Absolutely — that's what the free consultation is for. Many of our best projects started as rough ideas. We'll help you shape it into something buildable and practical before writing a single line of code.",
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-kn-navy text-base">{q}</span>
        <span className="ml-4 shrink-0 text-kn-green">
          {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white text-gray-600 leading-relaxed border-t border-gray-100">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-16 text-center">
          <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-kn-navy mb-4">
            Common questions
          </h2>
          <p className="text-lg text-gray-500">
            Honest answers to the things people always ask before reaching out.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
        <p className="text-center text-gray-400 mt-10 text-sm">
          Still have questions?{" "}
          <Link href="/contact" className="text-kn-green font-semibold hover:underline">
            Ask us directly →
          </Link>
        </p>
      </div>
    </section>
  )
}
