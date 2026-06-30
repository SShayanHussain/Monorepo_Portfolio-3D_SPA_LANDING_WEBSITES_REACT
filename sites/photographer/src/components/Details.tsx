import { siteContent } from "@/data/content";

const { about, process, testimonials, footer } = siteContent;

export default function Details() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-32 bg-surface text-brand border-t border-surface-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-display text-4xl sm:text-5xl md:text-6xl mb-8">{about.headline}</h2>
              <p className="font-body text-brand-200 text-lg sm:text-xl leading-relaxed max-w-lg font-light">
                {about.text}
              </p>
            </div>
            <div className="aspect-[3/4] lg:aspect-square w-full max-w-md mx-auto lg:ml-auto overflow-hidden">
              <img 
                src={about.image} 
                alt="Wren Hale" 
                className="w-full h-full object-cover grayscale" 
                loading="lazy" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-surface-100 text-brand">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-display text-4xl sm:text-5xl mb-20 text-center">{process.headline}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {process.steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-brand mb-6" />
                <h3 className="font-body uppercase tracking-widest text-xs font-semibold mt-6 mb-4">{step.title}</h3>
                <p className="font-body text-brand-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface text-brand border-y border-surface-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
             <img 
               src={testimonials[0].thumbnail} 
               alt={testimonials[0].author} 
               className="w-16 h-16 rounded-full object-cover grayscale"
             />
          </div>
          <p className="text-display text-2xl sm:text-3xl lg:text-4xl leading-snug italic mb-8">
            "{testimonials[0].quote}"
          </p>
          <p className="font-body text-xs uppercase tracking-widest text-brand-400">
            — {testimonials[0].author}, {testimonials[0].role}
          </p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquire" className="py-32 bg-surface text-brand">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-display text-4xl mb-12 text-center">Inquire</h2>
          
          <form className="space-y-8 font-body text-sm font-light">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-brand-400 mb-2">Name</label>
                <input type="text" className="border-b border-surface-200 bg-transparent py-2 focus:outline-none focus:border-brand transition-colors" required />
              </div>
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-brand-400 mb-2">Email</label>
                <input type="email" className="border-b border-surface-200 bg-transparent py-2 focus:outline-none focus:border-brand transition-colors" required />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-widest text-brand-400 mb-2">Shoot Type / Date</label>
              <input type="text" className="border-b border-surface-200 bg-transparent py-2 focus:outline-none focus:border-brand transition-colors" required />
            </div>

            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-widest text-brand-400 mb-2">Project Details</label>
              <textarea rows={4} className="border-b border-surface-200 bg-transparent py-2 focus:outline-none focus:border-brand transition-colors resize-none" required></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-brand text-surface py-4 uppercase tracking-widest text-xs hover:bg-brand-100 transition-colors mt-8"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brand text-surface font-body text-xs tracking-widest uppercase text-center">
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-8">
          <a href={footer.instagram} className="hover:text-surface-200 transition-colors">Instagram</a>
          <a href={`mailto:${footer.email}`} className="hover:text-surface-200 transition-colors">Email</a>
        </div>
        <p className="text-brand-300 normal-case tracking-normal mb-2">{footer.location}</p>
        <p className="text-brand-400 tracking-normal">&copy; {new Date().getFullYear()} {siteContent.brand}</p>
      </footer>
    </>
  );
}
