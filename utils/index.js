export const customNextLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}