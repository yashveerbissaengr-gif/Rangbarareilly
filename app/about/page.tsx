import { PageTransition } from "@/components/animations/PageTransition";
import Image from "next/image";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="bg-warm-white min-h-screen">
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-dark-charcoal/20 z-10" />
          <div className="absolute inset-0 bg-warm-ivory flex items-center justify-center">
            {/* Placeholder for hero image */}
            <span className="text-secondary-text font-serif italic text-lg z-0">About Us Hero Image</span>
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-widest text-center px-4 drop-shadow-md">
              Our Heritage
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h2 className="text-3xl font-serif text-dark-charcoal uppercase tracking-widest mb-8">
            The Story of Rangbareilly
          </h2>
          <div className="space-y-6 text-lg text-dark-charcoal leading-relaxed font-light">
            <p>
              Born from a passion for timeless elegance and impeccable craftsmanship, Rangbareilly represents the pinnacle of luxury jewellery. Every piece tells a story of heritage, art, and the meticulous attention to detail that defines our brand.
            </p>
            <p>
              Our artisans blend traditional techniques with modern aesthetics to create adornments that are not merely worn, but cherished across generations.
            </p>
          </div>
        </div>

        <div className="bg-warm-ivory py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="aspect-[4/5] bg-white border border-border relative">
                 <div className="absolute inset-0 flex items-center justify-center text-secondary-text font-serif italic">
                    Craftsmanship Image
                 </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-dark-charcoal uppercase tracking-widest mb-6">
                  Uncompromising Quality
                </h3>
                <p className="text-dark-charcoal leading-relaxed font-light mb-8">
                  We source only the finest materials—ethically mined diamonds, purest gold, and rarest gemstones. Our commitment to excellence ensures that every creation that leaves our atelier is nothing short of perfection.
                </p>
                <a href="/collections/all" className="inline-block border-b-2 border-brand-red text-dark-charcoal font-medium pb-1 hover:text-brand-red transition-colors uppercase tracking-wider text-sm">
                  Explore Collections
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
