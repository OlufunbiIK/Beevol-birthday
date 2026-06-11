import { Reveal } from '@/components/reveal'
import { Music, Play } from 'lucide-react'

export function OurSong() {
  return (
    <section className="relative bg-secondary/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Press play before you read the letter
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
            Our <span className="italic text-primary">song</span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <div className="mx-auto mt-12 max-w-md rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
            <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-accent text-primary float-slow">
              <Music className="size-7" />
            </span>
            <p className="mt-6 font-serif text-3xl font-medium text-card-foreground sm:text-4xl">
              Golden
            </p>
            <p className="mt-2 text-base uppercase tracking-[0.25em] text-muted-foreground">
              Jill Scott
            </p>

            <a
              href="https://open.spotify.com/search/Jill%20Scott%20Golden"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground shadow-sm transition-transform duration-300 hover:scale-105"
            >
              <Play className="size-4 fill-current" />
              Play on Spotify
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
