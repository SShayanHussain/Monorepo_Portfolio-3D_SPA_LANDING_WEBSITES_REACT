import { Section, SectionHeading, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { featuredListings } = siteContent;

export default function FeaturedListings() {
  return (
    <Section id="listings" className="bg-surface-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow={featuredListings.eyebrow}
            headline={featuredListings.headline}
            align="left"
            className="text-cream m-0"
          />
          <Button variant="secondary" className="border-brand-500 text-brand-700 hover:bg-brand-50 w-full md:w-auto">
            View All Properties
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredListings.listings.map((listing) => (
            <div key={listing.id} className="bg-surface shadow-sm hover:shadow-md transition-shadow group border border-surface-200 overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={listing.image} 
                  alt={listing.address} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-surface text-cream font-bold px-3 py-1 text-sm shadow-sm">
                  Active
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-2xl font-display font-bold text-brand-800 mb-2">{listing.price}</p>
                <div className="flex items-center gap-3 text-sm font-body text-cream-20 mb-4 divide-x divide-surface-200">
                  <span className="font-semibold">{listing.beds} <span className="font-normal opacity-70">Beds</span></span>
                  <span className="pl-3 font-semibold">{listing.baths} <span className="font-normal opacity-70">Baths</span></span>
                  <span className="pl-3 font-semibold">{listing.sqft} <span className="font-normal opacity-70">Sq.Ft.</span></span>
                </div>
                <p className="text-sm font-body text-cream-20 mt-auto leading-relaxed border-t border-surface-100 pt-4 truncate">
                  {listing.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
