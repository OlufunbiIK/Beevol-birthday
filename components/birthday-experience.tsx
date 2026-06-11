'use client'

import { ChevronLeft, ChevronRight, Film, Images } from 'lucide-react'
import { useEffect, useMemo, useState, type CSSProperties } from 'react'

const CANDLES = Array.from({ length: 21 }, (_, index) => index + 1)
const CONFETTI = Array.from({ length: 58 }, (_, index) => index + 1)

const qualities = [
  'steady heart',
  'clear head',
  'honeyed wins',
  'better rooms',
  'clean money',
  'brothers who mean it',
]

const featuredVideos = [
  {
    src: '/video-one.mp4',
    title: 'First birthday clip',
    caption: 'The first piece of the day, held close and easy.',
  },
  {
    src: '/video-two.mp4',
    title: 'Second birthday clip',
    caption: 'Another moment for the laugh, the message, and the memory.',
  },
]

const extraVideos = [
  {
    src: '/video-three.mp4',
    title: 'Bonus clip one',
  },
  {
    src: '/video-four.mp4',
    title: 'Bonus clip two',
  },
]

const photoSlides = [
  { src: '/one.jpeg', title: 'Memory one', caption: 'A frame for the archive.' },
  { src: '/two.jpeg', title: 'Memory two', caption: 'Soft proof of the day.' },
  { src: '/three.jpeg', title: 'Memory three', caption: 'A little golden still.' },
  { src: '/four.jpeg', title: 'Memory four', caption: 'The kind of picture that stays.' },
  { src: '/five.jpeg', title: 'Memory five', caption: 'Birthday light, kept properly.' },
  { src: '/six.jpeg', title: 'Memory six', caption: 'Another reason to smile back.' },
  { src: '/seven.jpeg', title: 'Memory seven', caption: 'A clean one for the reel.' },
  { src: '/eight.jpeg', title: 'Memory eight', caption: 'Small moment, big feeling.' },
  { src: '/nine.jpeg', title: 'Memory nine', caption: 'One more for the family record.' },
  { src: '/ten.jpeg', title: 'Memory ten', caption: 'The closer, sealed in gold.' },
]

export function BirthdayExperience() {
  const [stage, setStage] = useState<'waiting' | 'lit' | 'blown'>('waiting')
  const [showConfetti, setShowConfetti] = useState(false)
  const [slideValue, setSlideValue] = useState(0)
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const [missingMedia, setMissingMedia] = useState<Record<string, boolean>>({})
  const isLit = stage === 'lit'
  const candlesBlown = stage === 'blown'
  const noteOpen = slideValue === 100
  const activePhoto = photoSlides[activePhotoIndex]

  const candleHeights = useMemo(
    () =>
      CANDLES.map((number) => ({
        number,
        height: 28 + ((number * 13) % 24),
        delay: `${number * 32}ms`,
      })),
    [],
  )

  const confettiPieces = useMemo(
    () =>
      CONFETTI.map((number) => ({
        number,
        left: `${(number * 17) % 100}%`,
        color: ['#f8c64e', '#a33f36', '#fff2cf', '#6f8f83', '#1d2320'][
          number % 5
        ],
        delay: `${(number % 11) * 45}ms`,
        rotate: `${90 + number * 31}deg`,
        drift: `${-80 + ((number * 23) % 160)}px`,
      })),
    [],
  )

  useEffect(() => {
    if (!showConfetti) return
    const timeout = window.setTimeout(() => setShowConfetti(false), 3200)
    return () => window.clearTimeout(timeout)
  }, [showConfetti])

  function handleCakeAction() {
    if (stage === 'waiting') {
      setStage('lit')
      return
    }

    if (stage === 'lit') {
      setStage('blown')
      setShowConfetti(true)
      return
    }

    setStage('lit')
    setSlideValue(0)
  }

  function handleSlide(value: number) {
    if (!candlesBlown) return
    setSlideValue(value > 88 ? 100 : value)
  }

  function showPreviousPhoto() {
    setActivePhotoIndex((current) =>
      current === 0 ? photoSlides.length - 1 : current - 1,
    )
  }

  function showNextPhoto() {
    setActivePhotoIndex((current) =>
      current === photoSlides.length - 1 ? 0 : current + 1,
    )
  }

  function markMediaMissing(src: string) {
    setMissingMedia((current) => ({ ...current, [src]: true }))
  }

  return (
    <div
      className={[
        'birthday-room',
        isLit ? 'birthday-room-lit' : '',
        candlesBlown ? 'birthday-room-blown' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {showConfetti && (
        <div className="confetti-burst" aria-hidden="true">
          {confettiPieces.map((piece) => (
            <span
              key={piece.number}
              style={
                {
                  '--left': piece.left,
                  '--color': piece.color,
                  '--delay': piece.delay,
                  '--rotate': piece.rotate,
                  '--drift': piece.drift,
                } as CSSProperties
              }
            />
          ))}
        </div>
      )}

      <section className="birthday-shell">
        <div className="birthday-kicker">Beevol turns 21</div>

        <div className="birthday-hero">
          <p className="birthday-count">from Sis Bibi</p>
          <h1>
            <span>Happy 21st,</span>
            <span>Beevol.</span>
          </h1>
          <p className="birthday-intro">
            A honey-lit birthday ritual, made for your phone. Tap the gold
            button to light the candles. When your wish is ready, tap it again
            to blow them out.
          </p>
        </div>

        <div className="cake-wrap" aria-label="Birthday cake with twenty one candles">
          <div className="cake-honeycomb" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="bee-flight bee-flight-left" aria-hidden="true">
            <span className="mini-bee">
              <span />
            </span>
          </div>
          <div className="bee-flight bee-flight-right" aria-hidden="true">
            <span className="mini-bee">
              <span />
            </span>
          </div>
          <div className="cake-glow" />
          <div className="cake-candles">
            {candleHeights.map((candle) => (
              <span
                key={candle.number}
                className="candle"
                style={
                  {
                    '--height': `${candle.height}px`,
                    '--delay': candle.delay,
                  } as CSSProperties
                }
              >
                <span className="wick" />
                <span className="flame" />
                <span className="smoke" />
              </span>
            ))}
          </div>
          <div className="cake-top">
            <span className="cake-crumb cake-crumb-one" />
            <span className="cake-crumb cake-crumb-two" />
            <span className="cake-crumb cake-crumb-three" />
            <span className="honey-drip honey-drip-one" />
            <span className="honey-drip honey-drip-two" />
            <span className="honey-drip honey-drip-three" />
          </div>
          <div className="cake-body">
            <span className="cake-age">21</span>
            <span className="cake-ribbon" />
            <span className="cake-comb-dot cake-comb-dot-one" />
            <span className="cake-comb-dot cake-comb-dot-two" />
            <span className="cake-comb-dot cake-comb-dot-three" />
          </div>
          <div className="cake-base-tier">
            <span />
          </div>
          <div className="cake-plate" />
        </div>

        <button
          type="button"
          className="candle-button"
          onClick={handleCakeAction}
          aria-pressed={isLit}
        >
          <span>
            {stage === 'waiting'
              ? "Tap to light Beevol's candles"
              : stage === 'lit'
                ? 'Tap again to blow them out'
                : 'Relight the honey glow'}
          </span>
          <span className="button-line" />
        </button>

        <p className="room-note">
          {stage === 'waiting'
            ? 'Step one: tap the button above to light every candle for Beevol.'
            : stage === 'lit'
              ? 'Make the wish. This page cannot hear breath, so tap the button again to blow the candles out.'
              : 'Candles out. Confetti earned. Slide the note open next.'}
        </p>
      </section>

      <section className="birthday-shell birthday-shell-note">
        <div className="slide-header">
          <p>A note from Sis Bibi</p>
          <span>{Math.round(slideValue)}%</span>
        </div>

        <div
          className={[
            'note-lock',
            noteOpen ? 'note-lock-open' : '',
            candlesBlown ? '' : 'note-lock-disabled',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <input
            aria-label="Slide to open Beevol's birthday note"
            type="range"
            min="0"
            max="100"
            value={slideValue}
            disabled={!candlesBlown}
            onChange={(event) => handleSlide(Number(event.target.value))}
            className="note-slider"
            style={{ '--progress': `${slideValue}%` } as CSSProperties}
          />

          <div className="note-paper" aria-live="polite">
            {noteOpen ? (
              <>
                <p className="note-name">Beevol,</p>
                <p>
                  I don't say it every day, but I am proud of you. Twenty one is
                  a strange age: old enough for people to expect strength, still
                  young enough to be figuring out what kind of man you want to
                  become.
                </p>
                <p>
                  My wish for you is simple. May this year give you courage
                  without making you hard, success without taking your joy, and
                  people who see the real you without needing a performance.
                </p>
                <p>
                  Keep your head clear. Keep your heart alive. Walk into this
                  year like your name belongs in better rooms, because it does.
                </p>
                <p className="note-signature">Love, Sis Bibi</p>
              </>
            ) : (
              <div className="note-cover">
                {candlesBlown
                  ? 'Slide all the way to open the note.'
                  : 'Blow out the candles first.'}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="birthday-shell memory-shell">
        <div className="media-section-heading">
          <p className="closing-label">Sis Bibi's camera roll</p>
          <h2>Videos first. Pictures after.</h2>
          <p>
            A little highlight reel for Beevol, then every still frame in one
            smooth slider.
          </p>
        </div>

        <div className="video-grid">
          {featuredVideos.map((video, index) => (
            <article className="media-card video-card" key={video.src}>
              <div className="video-frame">
                {!missingMedia[video.src] ? (
                  <video
                    className="memory-video"
                    controls
                    playsInline
                    preload="metadata"
                    onError={() => markMediaMissing(video.src)}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                ) : (
                  <div className="media-missing">Video could not load.</div>
                )}
              </div>
              <div className="video-copy">
                <span className="video-chip">
                  <Film aria-hidden="true" size={14} strokeWidth={2.4} />
                  Clip {index + 1}
                </span>
                <h3>{video.title}</h3>
                <p>{video.caption}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="bonus-video-strip" aria-label="More birthday video clips">
          {extraVideos.map((video) => (
            <article className="bonus-video" key={video.src}>
              {!missingMedia[video.src] ? (
                <video
                  controls
                  playsInline
                  preload="metadata"
                  onError={() => markMediaMissing(video.src)}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              ) : (
                <div className="media-missing">Video could not load.</div>
              )}
              <p>{video.title}</p>
            </article>
          ))}
        </div>

        <div className="photo-slider" aria-label="Beevol birthday photo slider">
          <div className="slider-topline">
            <span>
              <Images aria-hidden="true" size={15} strokeWidth={2.4} />
              Picture slider
            </span>
            <span>
              {activePhotoIndex + 1}/{photoSlides.length}
            </span>
          </div>

          <div className="slider-frame">
            {!missingMedia[activePhoto.src] ? (
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="slider-photo"
                onError={() => markMediaMissing(activePhoto.src)}
              />
            ) : (
              <div className="media-missing">Photo could not load.</div>
            )}

            <button
              type="button"
              className="slider-button slider-button-prev"
              onClick={showPreviousPhoto}
              aria-label="Show previous photo"
            >
              <ChevronLeft aria-hidden="true" size={24} strokeWidth={2.6} />
            </button>
            <button
              type="button"
              className="slider-button slider-button-next"
              onClick={showNextPhoto}
              aria-label="Show next photo"
            >
              <ChevronRight aria-hidden="true" size={24} strokeWidth={2.6} />
            </button>

            <div className="slider-caption">
              <p>{activePhoto.title}</p>
              <span>{activePhoto.caption}</span>
            </div>
          </div>

          <div className="slider-dots" aria-label="Choose a photo">
            {photoSlides.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                aria-label={`Show ${photo.title}`}
                aria-current={activePhotoIndex === index}
                onClick={() => setActivePhotoIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="birthday-shell closing-shell">
        <p className="closing-label">for Beevol's year ahead</p>
        <div className="quality-list">
          {qualities.map((quality) => (
            <span key={quality}>{quality}</span>
          ))}
        </div>
        <h2>Happy 21st, Beevol.</h2>
        <p>
          No noise for the sake of noise. Just love, belief, and a golden
          little moment from Sis Bibi that waits for him to touch it before it
          opens.
        </p>
      </section>
    </div>
  )
}
