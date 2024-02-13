import { useOf } from '@storybook/blocks';

/**
 * A block that displays the story name or title from the of prop
 * - if a story reference is passed, it renders the story name
 * - if a meta reference is passed, it renders the stories' title
 * - if nothing is passed, it defaults to the primary story
 */
export const Badges = ({ of, right }) => {
  const resolvedOf = useOf(of || 'story', ['story', 'meta']);
  switch (resolvedOf.type) {
    case 'story': {
      const { badges } = resolvedOf.story.parameters
      return renderBadges(badges, !!right)
    }
    case 'meta': {
      const { badges } = resolvedOf.preparedMeta.parameters
      return renderBadges(badges, !!right)
    }
  }
}

function renderBadges(badges, rightAligned) {
  const badgeElements = badges.map((badge) => <span class={`sb-unstyled sb-badge sb-badge-${badge}`}>{badge}</span>)

  return (
    <div class={`sb-badge-list ${rightAligned ? 'sb-badge-list--right' : ''}`}>
      {badgeElements}
    </div>
  )
}
