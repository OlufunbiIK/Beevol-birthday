import { Reveal } from '@/components/reveal'
import { Gift, Sparkles } from 'lucide-react'

export function BirthdayWish() {
  return (
    <section
      id="wish"
      className="relative isolate overflow-hidden bg-[#101513] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_28%,rgba(255,222,59,0.28),transparent_25%),radial-gradient(circle_at_12%_80%,rgba(255,77,115,0.22),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(0,229,214,0.22),transparent_28%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(135deg,#ff4d73_0_14%,#ffde3b_14%_28%,#00e5d6_28%_42%,#7c5cff_42%_56%,#ff4d73_56%_70%,#ffde3b_70%_84%,#00e5d6_84%)] opacity-90 [clip-path:polygon(0_0,100%_0,100%_45%,95%_100%,90%_45%,85%_100%,80%_45%,75%_100%,70%_45%,65%_100%,60%_45%,55%_100%,50%_45%,45%_100%,40%_45%,35%_100%,30%_45%,25%_100%,20%_45%,15%_100%,10%_45%,5%_100%,0_45%)]"
      />

      <div className="relative z-10 mx-auto max-w-5xl pt-16 text-center">
        <Reveal>
          <p className="mx-auto mb-7 inline-flex max-w-full items-center gap-2 rounded-[8px] border border-white/18 bg-white/10 px-3 py-2 text-[0.65rem] font-black uppercase leading-5 tracking-[0.16em] text-[#fff7b0] backdrop-blur sm:text-xs sm:tracking-[0.22em]">
            <Gift className="size-4" />
            Final birthday transmission
          </p>
          <h2 className="mx-auto max-w-4xl text-balance font-serif text-5xl font-black leading-[0.98] text-white sm:text-6xl md:text-7xl">
            May this new year feel like the universe finally turned the volume
            up for you.
          </h2>
          <div className="mx-auto mt-9 max-w-3xl rounded-[8px] border border-white/18 bg-white/8 p-6 text-left shadow-[0_30px_90px_rgba(0,0,0,0.26)] backdrop-blur sm:p-8">
            <Sparkles className="mb-6 size-8 text-[#ffde3b]" />
            <p className="text-pretty text-xl font-semibold leading-9 text-white/84 sm:text-2xl">
              More peace than pressure. More money than stress. More laughter
              than overthinking. More doors than walls. More reasons to say,
              &quot;yeah, this is exactly the life I was meant to live.&quot;
            </p>
            <p className="mt-7 font-serif text-3xl font-black text-[#ffde3b] sm:text-4xl">
              Happy birthday, my brother.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
