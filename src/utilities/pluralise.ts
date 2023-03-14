const KNOWN_PLURALS: Record<string, string> = {
  child: 'children',
  country: 'countries',
  property: 'properties',
}

export function getPluralisedWord(count: number, singular: string, plural?: string) {
  if (count === 1) {
    return singular
  } else {
    return plural ?? KNOWN_PLURALS[singular] ?? `${singular}s`
  }
}

export default function pluralise(count: number, singular: string, plural?: string) {
  return `${count} ${getPluralisedWord(count, singular, plural)}`
}
