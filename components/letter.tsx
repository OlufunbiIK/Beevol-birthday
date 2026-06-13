import { Reveal } from '@/components/reveal'

export function Letter() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal className="mb-12 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Read this slowly
          </p>
          <h2 className="font-im-fell text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
            A <span className="italic text-primary">letter</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="relative rounded-[1.75rem] border border-border/70 bg-card px-7 py-10 shadow-md sm:px-12 sm:py-14"
            style={{
              backgroundImage:
                'repeating-linear-gradient(transparent, transparent 38px, oklch(0.89 0.025 70 / 0.35) 39px)',
              backgroundBlendMode: 'multiply',
            }}
          >
            {/* Ink-fade vignette */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[1.75rem]"
              style={{
                background:
                  'radial-gradient(ellipse at center, transparent 60%, oklch(0.78 0.04 70 / 0.18) 100%)',
              }}
            />

              <div className="font-im-fell relative text-lg leading-[2.45rem] text-card-foreground sm:text-xl">
              <p className="mb-6">Dear Amaka,</p>
              <p className="mb-6">
                I&apos;ve started this letter about four times because no
                version of it feels big enough. So I&apos;ll just say the true
                things.
              </p>
              <p className="mb-6">
                You&apos;ve been my person for eight years. Through the moves,
                the heartbreaks, the 2AM calls, the silly ones and the serious
                ones. You showed up for me when I couldn&apos;t show up for
                myself, and you never once made me feel like a burden for it.
              </p>
              <p className="mb-6">
                The world is softer because you&apos;re in it. You love people
                fiercely and quietly, and you deserve to feel even a fraction of
                the warmth you hand out so freely.
              </p>
              <p className="mb-6">
                So today, I just want you to feel it. All of it. You are loved,
                Amaka. Deeply, loudly, and for good.
              </p>
              <p className="mb-8">
                Thank you for eight years of being you. Here&apos;s to all the
                ones still coming.
              </p>
              <p className="text-right">
                Always,
                <span
                  className="mt-2 block text-3xl italic text-primary sm:text-4xl"
                >
                  Tolu
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}