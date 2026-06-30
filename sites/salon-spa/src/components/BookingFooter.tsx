import { SectionHeading, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { bookingFooter } = siteContent;

export default function BookingFooter() {
  return (
    <footer id="booking" className="bg-brand-50 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={bookingFooter.eyebrow}
          headline={bookingFooter.headline}
          align="center"
          className="text-cream"
        />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-surface shadow-xl rounded-2xl overflow-hidden">
          
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <h3 className="text-3xl font-display text-cream mb-8">Book Your Experience</h3>
            <p className="text-cream-20 font-body font-light mb-10 leading-relaxed max-w-md">
              Secure your preferred time and stylist instantly. For groups or special requests, please contact us directly.
            </p>
            
            <div className="mb-12">
              <Button 
                href="#booking"
                variant="primary"
                className="bg-brand-500 hover:bg-brand-600 text-surface border-none rounded-full px-10 py-5 w-full md:w-auto text-center"
              >
                Schedule Online
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-8 text-sm font-body text-cream-20 border-t border-surface-200 pt-8">
              <div>
                <h4 className="font-semibold text-cream mb-4 uppercase tracking-widest text-xs">Location</h4>
                <div className="space-y-1">
                  {bookingFooter.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-cream mb-4 uppercase tracking-widest text-xs">Hours</h4>
                <div className="space-y-1">
                  {bookingFooter.hours.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-96 lg:h-auto relative">
            <img 
              src={bookingFooter.map.src}
              alt={bookingFooter.map.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
      <div className="bg-cream mt-24 py-12 text-center text-surface-200">
        <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-2xl font-display">{siteContent.brand}</p>
          <div className="flex gap-8 text-sm font-body">
            <a href={`tel:${bookingFooter.phone.replace(/[^0-9]/g, '')}`} className="hover:text-brand-300 transition-colors">{bookingFooter.phone}</a>
            <a href={`mailto:${bookingFooter.email}`} className="hover:text-brand-300 transition-colors">{bookingFooter.email}</a>
          </div>
          <p className="text-xs font-body opacity-50">
            © {new Date().getFullYear()} {siteContent.brand}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
