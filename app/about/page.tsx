import { Metadata } from 'next';
import { Heading, Text } from '@/components/ui/Typography';
import { Navigation } from '@/components/blocks/Navigation';
import { Footer } from '@/components/blocks/Footer';

export const metadata: Metadata = {
  title: 'Our Story | GLINT',
  description: 'The story behind GLINT fine jewelry.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#F5F2EA]">
      <Navigation theme="core" />
      
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center text-center px-6 py-32 border-b border-glint-charcoal/10 mt-16">
        <Heading as="h1" className="text-4xl md:text-5xl lg:text-6xl text-glint-charcoal mb-6">
          Small Sparks. Everyday.
        </Heading>
        <Text className="max-w-2xl text-glint-charcoal/80 text-lg">
          GLINT was founded on a simple premise: fine jewelry shouldn&apos;t be reserved for special occasions. It should be lived in, loved, and worn every single day.
        </Text>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-[1200px] mx-auto px-6 py-24 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[3/4] w-full bg-black/5">
            {/* Using a placeholder gradient for the editorial image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-glint-charcoal/20 to-glint-ivory/50" />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col">
          <Text className="text-xs uppercase tracking-widest text-glint-charcoal/60 mb-4">
            Our Philosophy
          </Text>
          <Heading as="h2" className="text-3xl text-glint-charcoal mb-6">
            Designed for the Quiet Moments
          </Heading>
          <Text className="text-glint-charcoal/80 leading-relaxed mb-6">
            We believe that true luxury whispers. It doesn&apos;t shout. Our pieces are characterized by clean lines, negative space, and an uncompromising dedication to structural integrity.
          </Text>
          <Text className="text-glint-charcoal/80 leading-relaxed">
            Every piece of GLINT jewelry is handcrafted using responsibly sourced 14k solid gold and conflict-free diamonds. We design with longevity in mind, ensuring your pieces will outlast fleeting trends and become part of your daily uniform.
          </Text>
        </div>
      </div>
      
      <Footer theme="core" />
    </div>
  );
}
