import { PageTransition } from "@/components/animations/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="bg-warm-white min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-dark-charcoal uppercase tracking-widest mb-4">
              Contact Us
            </h1>
            <p className="text-secondary-text max-w-2xl mx-auto">
              We are here to assist you with any inquiries regarding our collections, bespoke services, or your recent orders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-serif text-dark-charcoal uppercase tracking-widest mb-8">
                Send a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-charcoal uppercase tracking-widest mb-2">Name</label>
                  <input type="text" id="name" className="w-full border-border bg-white px-4 py-3 focus:ring-brand-red focus:border-brand-red transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-charcoal uppercase tracking-widest mb-2">Email</label>
                  <input type="email" id="email" className="w-full border-border bg-white px-4 py-3 focus:ring-brand-red focus:border-brand-red transition-colors" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-charcoal uppercase tracking-widest mb-2">Message</label>
                  <textarea id="message" rows={5} className="w-full border-border bg-white px-4 py-3 focus:ring-brand-red focus:border-brand-red transition-colors"></textarea>
                </div>
                <button type="submit" className="bg-dark-charcoal text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-brand-red transition-colors w-full sm:w-auto">
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="bg-warm-ivory p-10 lg:p-12 border border-border">
              <h2 className="text-2xl font-serif text-dark-charcoal uppercase tracking-widest mb-8">
                Client Services
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-dark-charcoal uppercase tracking-widest mb-2">Email</h3>
                  <a href="mailto:concierge@rangbareilly.com" className="text-brand-red hover:text-red-800 transition-colors">
                    concierge@rangbareilly.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-dark-charcoal uppercase tracking-widest mb-2">Phone</h3>
                  <p className="text-secondary-text">+91 800 123 4567</p>
                  <p className="text-sm text-secondary-text mt-1">Monday to Saturday, 10:00 AM - 7:00 PM IST</p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-dark-charcoal uppercase tracking-widest mb-2">Flagship Boutique</h3>
                  <p className="text-secondary-text">
                    123 Heritage Row, <br />
                    Connaught Place, <br />
                    New Delhi, 110001 <br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
