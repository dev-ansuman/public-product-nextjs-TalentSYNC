interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar_initial: string;
}

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="border-b border-black">
      <div className="max-w-7xl mx-auto px-6 py-15">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-px bg-black" />
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Testimonials</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border border-black">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 flex flex-col gap-6">
              <span className="text-6xl font-black text-neutral-100 leading-none select-none">"</span>
              <p className="text-base leading-relaxed text-neutral-700 -mt-6">{t.content}</p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-neutral-100">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center text-xs font-black shrink-0">
                  {t.avatar_initial}
                </div>
                <div>
                  <p className="font-black text-sm tracking-tight">{t.name}</p>
                  <p className="text-xs text-neutral-400 uppercase tracking-wide">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}