import Image from 'next/image'
import { Gift, Rocket, Sparkles, Trophy } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[94svh] items-center overflow-hidden px-5 py-10 text-white sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#111513]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(255,76,76,0.36),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(0,229,214,0.28),transparent_25%),radial-gradient(circle_at_58%_66%,rgba(255,221,64,0.24),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_44%)]"
      />
      <div
        aria-hidden="true"
        className="birthday-grid absolute inset-0 -z-10 opacity-55"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="relative z-10">
          <div
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-[8px] border border-white/18 bg-white/10 px-3 py-2 text-[0.65rem] font-black uppercase leading-5 tracking-[0.16em] text-[#fff7b0] shadow-[0_0_40px_rgba(255,255,255,0.08)] backdrop-blur opacity-0 anim-fade-up sm:text-xs sm:tracking-[0.22em]"
            style={{ animationDelay: '0.1s' }}
          >
            <Sparkles className="size-4" />
            Birthday mode: unlocked
          </div>

          <h1
            className="max-w-4xl text-balance font-serif text-6xl font-black leading-[0.9] text-white opacity-0 drop-shadow-[0_18px_45px_rgba(0,0,0,0.35)] anim-fade-up sm:text-7xl md:text-8xl lg:text-9xl"
            style={{ animationDelay: '0.26s' }}
          >
            Happy Birthday,
            <span className="birthday-title mt-2 block">Bro</span>
          </h1>

          <p
            className="mt-7 max-w-2xl text-pretty text-lg font-medium leading-8 text-white/82 opacity-0 anim-fade-up sm:text-xl"
            style={{ animationDelay: '0.48s' }}
          >
            Today gets the full-volume treatment: more light, more laughter,
            more wins, and absolutely no ordinary-page behavior.
          </p>

          <div
            className="mt-8 flex flex-wrap gap-3 opacity-0 anim-fade-up"
            style={{ animationDelay: '0.68s' }}
          >
            <a
              href="#hype"
              className="inline-flex h-12 items-center gap-2 rounded-[8px] bg-[#ffde3b] px-5 text-sm font-black uppercase tracking-[0.16em] text-[#1a1710] shadow-[0_18px_45px_rgba(255,222,59,0.28)] transition hover:-translate-y-1"
            >
              <Rocket className="size-4" />
              Start the party
            </a>
            <a
              href="#wish"
              className="inline-flex h-12 items-center gap-2 rounded-[8px] border border-white/20 bg-white/10 px-5 text-sm font-black uppercase tracking-[0.16em] text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/16"
            >
              <Gift className="size-4" />
              Open the wish
            </a>
          </div>

          <div
            className="mt-10 grid max-w-2xl gap-3 opacity-0 anim-fade-up sm:grid-cols-3"
            style={{ animationDelay: '0.9s' }}
          >
            {['Legend energy', 'Joy incoming', 'Cake secured'].map((item) => (
              <div
                key={item}
                className="rounded-[8px] border border-white/14 bg-white/[0.08] px-4 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white/88 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative mx-auto aspect-square w-full max-w-[560px] opacity-0 anim-fade-up lg:ml-auto"
          style={{ animationDelay: '0.4s' }}
        >
          <div
            aria-hidden="true"
            className="party-orbit absolute inset-2 rounded-full border border-dashed border-white/28"
          />
          <div
            aria-hidden="true"
            className="party-orbit party-orbit-reverse absolute inset-10 rounded-full border border-dashed border-[#00e5d6]/35"
          />
          <div className="absolute left-1/2 top-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[10px] border-white/12 bg-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            <Image
              src="/memories/memory-2.png"
              alt="Birthday cake glowing with candles"
              fill
              priority
              sizes="(max-width: 1024px) 78vw, 520px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_34%,rgba(17,21,19,0.42)_75%)]" />
          </div>
          <span className="absolute left-[4%] top-[26%] flex size-20 items-center justify-center rounded-full bg-[#ff4d73] text-white shadow-[0_18px_55px_rgba(255,77,115,0.38)] sm:size-24">
            <Trophy className="size-9 sm:size-10" />
          </span>
          <span className="absolute bottom-[8%] right-[2%] flex size-24 items-center justify-center rounded-full bg-[#00e5d6] text-[#071615] shadow-[0_18px_55px_rgba(0,229,214,0.34)] sm:size-28">
            <Sparkles className="size-11" />
          </span>
          <span className="absolute right-[12%] top-[6%] h-16 w-16 rounded-full bg-[#ffde3b] shadow-[0_0_60px_rgba(255,222,59,0.55)]" />
        </div>
      </div>
    </section>
  )
}
