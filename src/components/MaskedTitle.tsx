import type { ReactNode } from 'react'

type Segment = {
  text: string
  /** Classe appliquée aux mots de ce segment, ex. la couleur d'accent */
  className?: string
}

type Props = {
  /** Un ou plusieurs segments : permet de colorer une partie de la phrase */
  segments: Segment[]
  className?: string
  /** Retard avant le premier mot, en secondes */
  delay?: number
  /** Écart entre deux mots. .05 = nerveux, .07 = équilibré, .10 = solennel */
  stagger?: number
  as?: 'h1' | 'h2' | 'h3'
}

/**
 * Chaque mot est masqué puis remonte. Les mots sont aria-hidden et la phrase
 * complète est répétée en sr-only : sinon un lecteur d'écran annonce
 * « On. rend. votre. marque. » mot par mot.
 */
export default function MaskedTitle({
  segments,
  className = '',
  delay = 0.12,
  stagger = 0.07,
  as: Tag = 'h2',
}: Props) {
  let i = -1
  const phrase = segments.map((s) => s.text).join(' ')

  const words: ReactNode[] = segments.flatMap((seg) =>
    seg.text.split(' ').map((w) => {
      i += 1
      return (
        <span key={`${w}-${i}`} className={`wm ${seg.className ?? ''}`} aria-hidden="true">
          <span style={{ animationDelay: `${delay + i * stagger}s` }}>{w}</span>
        </span>
      )
    }),
  )

  return (
    <Tag className={className}>
      {words}
      <span className="sr-only">{phrase}</span>
    </Tag>
  )
}
