import { PageTransition } from "@/components/animations/PageTransition";

export default function PoliciesPage() {
  return (
    <PageTransition>
      <div className="bg-warm-white min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif text-dark-charcoal uppercase tracking-widest mb-4">
              Policies & Terms
            </h1>
            <p className="text-secondary-text">
              Important information regarding your Rangbareilly experience.
            </p>
          </div>

          <div className="space-y-12 bg-white p-8 sm:p-12 border border-border shadow-sm">
            <section>
              <h2 className="text-xl font-serif text-dark-charcoal uppercase tracking-widest mb-4 border-b border-border pb-2">
                Shipping Policy
              </h2>
              <div className="prose prose-sm text-dark-charcoal font-light leading-relaxed">
                <p>
                  We offer complimentary express shipping on all domestic orders within India. All shipments are fully insured and require a signature upon delivery. Orders are typically processed within 2-3 business days. Bespoke or customized pieces may require an additional 14-21 days for craftsmanship.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-dark-charcoal uppercase tracking-widest mb-4 border-b border-border pb-2">
                Returns & Exchanges
              </h2>
              <div className="prose prose-sm text-dark-charcoal font-light leading-relaxed">
                <p>
                  Rangbareilly accepts returns on unworn, pristine merchandise within 14 days of delivery. The security tag must remain intact. Custom-made, engraved, or altered items are final sale and cannot be returned or exchanged. To initiate a return, please contact our concierge service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif text-dark-charcoal uppercase tracking-widest mb-4 border-b border-border pb-2">
                Privacy Policy
              </h2>
              <div className="prose prose-sm text-dark-charcoal font-light leading-relaxed">
                <p>
                  We respect your privacy and are committed to protecting your personal data. The information collected is used solely to process your orders, provide a personalized shopping experience, and communicate updates about our collections. We do not sell your personal information to third parties.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
