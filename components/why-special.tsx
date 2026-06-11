import { Reveal } from '@/components/reveal'
import { Flame, Heart, Rocket, Shield, Sparkles } from 'lucide-react'

const reasons = [
  {
    icon: Flame,
    title: 'Main-character energy',
    text: 'You carry a room without trying too hard. Calm when it matters, hilarious when it counts.',
  },
  {
    icon: Shield,
    title: 'Built-in backbone',
    text: 'You show up, stand firm, and make people feel like they have someone solid in their corner.',
  },
  {
    icon: Rocket,
    title: 'Next-level season',
    text: 'This year should meet you with better doors, bigger wins, and the kind of momentum that feels unreal.',
  },
  {
    icon: Heart,
    title: 'Brother for life',
    text: 'No matter how grown we get, you are still family, home, and a lifetime kind of person.',
  },
]

export function WhySpecial() {
  return (
    <section
      id="hype"
      className="relative overflow-hidden bg-[#fff8e8] px-5 py-20 text-[#17130f] sm:px-8 sm:py-28 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,77,115,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(0,185,170,0.08)_1px,transparent_1px)] bg-[size:44px_44px]"
      />
      <div className="absolute left-0 top-0 h-2 w-full bg-[linear-gradient(90deg,#ff4d73,#ffde3b,#00e5d6,#7c5cff,#ff4d73)]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-12 max-w-3xl">
          <p className="mb-4 inline-flex max-w-full items-center gap-2 rounded-[8px] bg-[#17130f] px-3 py-2 text-[0.65rem] font-black uppercase leading-5 tracking-[0.16em] text-[#ffde3b] sm:text-xs sm:tracking-[0.22em]">
            <Sparkles className="size-4" />
            Brother highlight reel
          </p>
          <h2 className="font-serif text-5xl font-black leading-[0.95] text-[#17130f] sm:text-6xl md:text-7xl">
            The birthday hype is fully justified.
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-[#5f5044]">
            Not a soft little greeting card. More like a loud standing ovation
            with cake, color, and proof that your year is about to move
            differently.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <Reveal key={reason.text} delay={i * 90}>
                <article className="group h-full rounded-[8px] border-2 border-[#17130f] bg-white p-5 shadow-[8px_8px_0_#17130f] transition duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_#17130f] sm:p-6">
                  <span className="mb-7 flex size-12 items-center justify-center rounded-[8px] bg-[#ff4d73] text-white transition duration-300 group-hover:rotate-6 group-hover:bg-[#00b9aa]">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-serif text-2xl font-black text-[#17130f] sm:text-3xl">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-pretty text-base font-medium leading-7 text-[#5f5044] sm:text-lg">
                    {reason.text}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
