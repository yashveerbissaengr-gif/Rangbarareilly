import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ConciergePage() {
  const supportItems = [
    {
      title: "FAQs",
      description: "Find quick answers to common inquiries.",
      href: "/concierge/faqs",
    },
    {
      title: "Track Your Order",
      description: "Follow your shipment in real time.",
      href: "/concierge/track-order",
    },
    {
      title: "Shipping & Delivery",
      description: "Complimentary insured express shipping.",
      href: "/concierge/shipping",
    },
    {
      title: "Care Guide",
      description: "Preserve your pieces for generations.",
      href: "/concierge/care-guide",
    },
    {
      title: "Returns & Exchanges",
      description: "Simple, hassle-free returns and exchanges.",
      href: "/concierge/returns",
    },
    {
      title: "Contact Us",
      description: "Get in touch with our dedicated concierge team.",
      href: "/concierge/contact",
    },
  ];

  return (
    <div className="bg-[#FBFBFA] min-h-screen">
      {/* Massive Negative Space Wrapper */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        
        {/* Page Header */}
        <div className="text-center mb-20 md:mb-28">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#1C1C1C] uppercase tracking-[0.15em] mb-4">
            Customer Concierge
          </h1>
          <p className="font-sans text-sm md:text-base text-neutral-500 font-light tracking-wide">
            How can we assist you today?
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {supportItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group block bg-white border border-neutral-200 p-8 md:p-10 transition-all duration-300 hover:bg-neutral-50 hover:border-neutral-300 hover:shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-sans text-sm md:text-base font-semibold text-[#1C1C1C] uppercase tracking-[0.1em]">
                  {item.title}
                </h2>
                <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-[#1C1C1C] transform group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <p className="font-sans text-sm md:text-[15px] text-neutral-500 font-light leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
        
      </main>
    </div>
  );
}
