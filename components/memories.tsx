import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const memories = [
  {
    src: '/memories/memory-1.png',
    alt: 'Two friends laughing together on a city street at night',
    caption: 'That night we got completely lost and ended up having the best time.',
  },
  {
    src: '/memories/memory-2.png',
    alt: 'A birthday cake with candles being carried out in a restaurant',
    caption: 'Your face when they brought the cake out 😭',
  },
  {
    src: '/memories/memory-3.png',
    alt: 'Two friends watching the sunset together',
    caption: 'We said five minutes. We stayed until the sky went dark.',
  },
  {
    src: '/memories/memory-4.png',
    alt: 'Two friends holding coffee mugs across a table',
    caption: '8 years and you still answer my 2AM calls.',
  },
]

export function Memories() {
  return (
    <section className="relative bg-secondary/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Eight years, so far
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
            Our <span className="italic text-primary">memories</span>
          </h2>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {memories.map((memory, i) => (
            <Reveal key={memory.src} delay={i * 110}>
              <figure className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    src={memory.src || '/placeholder.svg'}
                    alt={memory.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, transparent 40%, oklch(0.72 0.09 75 / 0.18))',
                    }}
                  />
                </div>
                <figcaption className="mt-4 text-pretty text-center text-base italic leading-relaxed text-muted-foreground sm:text-lg">
                  {memory.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
