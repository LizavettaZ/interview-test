export function cutText (text, maxLength = 10, )  {
  return text.length > maxLength
    ? text.substring(0, maxLength) + '...'
    : text
}