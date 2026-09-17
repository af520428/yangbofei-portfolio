import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Tone = 'paper' | 'cool' | 'warm'

type Props = {
  children: ReactNode
  tone?: Tone
  className?: string
  to?: string
  href?: string
}

const toneClass: Record<Tone, string> = {
  paper: '',
  cool: 'sticker--cool',
  warm: 'sticker--warm',
}

export function StickerCard({
  children,
  tone = 'paper',
  className = '',
  to,
  href,
}: Props) {
  const classes = ['sticker', toneClass[tone], className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link to={to} className={`sticker-link ${classes}`}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={`sticker-link ${classes}`} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return <div className={classes}>{children}</div>
}
