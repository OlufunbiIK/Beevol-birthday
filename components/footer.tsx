export function Footer() {
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <footer className="birthday-footer">
      <div className="footer-bee-mark" aria-hidden="true">
        <span className="mini-bee">
          <span />
        </span>
      </div>
      <p className="footer-kicker">sealed from Sis Bibi</p>
      <p className="footer-title">For my brother, Beevol.</p>
      <p className="footer-meta">{today} / Twenty one, steady and golden.</p>
    </footer>
  )
}
