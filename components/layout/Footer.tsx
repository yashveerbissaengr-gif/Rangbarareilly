import Link from "next/link";
import { Mail, Phone, Clock } from "lucide-react";
import { LogoLink } from "../logo/LogoLink";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#333] pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Social (Spans 4 cols) */}
          <div className="md:col-span-4 pr-8">
            {/* Strict Logo Rules: Use white logo on dark footer. Width 160px. Centered vertically. Never distort. */}
            <div className="flex items-center mb-6">
              <LogoLink variant="white" widthOverride={160} />
            </div>
            
            <p className="text-[#999] text-xs leading-relaxed mb-6">
              Trendy jewellery for every mood, <br/>
              every moment and every you.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-[#444] flex items-center justify-center text-white hover:border-white hover:text-white transition-colors"><span className="text-[10px] font-bold">IG</span></a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#444] flex items-center justify-center text-white hover:border-white hover:text-white transition-colors"><span className="text-[10px] font-bold">FB</span></a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#444] flex items-center justify-center text-white hover:border-white hover:text-white transition-colors"><span className="text-[10px] font-bold">P</span></a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#444] flex items-center justify-center text-white hover:border-white hover:text-white transition-colors"><span className="text-[10px] font-bold">YT</span></a>
            </div>
          </div>

          {/* Column 2: SHOP */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white mb-6">Shop</h4>
            <ul className="space-y-3">
              {['New Arrivals', 'Collections', 'Earrings', 'Necklaces', 'Bracelets', 'Accessories'].map(item => (
                <li key={item}>
                  <Link href="/shop" className="text-xs text-[#999] hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
              <li>
                <Link href="/sale" className="text-xs font-bold text-[#E30613] hover:text-white transition-colors">Sale</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: HELP */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white mb-6">Help</h4>
            <ul className="space-y-3">
              {['FAQs', 'Shipping & Delivery', 'Returns & Exchanges', 'Track Your Order', 'Care Guide', 'Contact Us'].map(item => (
                <li key={item}>
                  <Link href="#" className="text-xs text-[#999] hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: ABOUT */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white mb-6">About</h4>
            <ul className="space-y-3">
              {['Our Story', 'Blog', 'Careers', 'Privacy Policy', 'Terms & Conditions'].map(item => (
                <li key={item}>
                  <Link href="#" className="text-xs text-[#999] hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: CONTACT */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#999] mt-0.5" />
                <span className="text-xs text-[#999]">hello@rangbareilly.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#999] mt-0.5" />
                <span className="text-xs text-[#999]">+91 90100 12345</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#999] mt-0.5" />
                <span className="text-xs text-[#999]">Mon - Sat (10AM - 7PM)</span>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <div className="w-6 h-6 bg-[#25D366] rounded-full flex items-center justify-center">
                  <Phone className="w-3 h-3 text-white fill-white" />
                </div>
                <span className="text-xs text-white font-bold mt-1">Chat with us</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#333] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-[#666]">
            © 2026 Rangbareilly. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#666]">Designed with ❤️ in India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
