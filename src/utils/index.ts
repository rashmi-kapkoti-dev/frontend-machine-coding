export const getAcronym = (str: string) => {
  const words = str
    .trim()
    .replaceAll(/\s+/g, ' ')
    .split(' ')
    .filter((item) => item.length);
  return words
    .map((word) => word.replaceAll(/[^a-zA-Z]/g, '')[0] ?? '')
    .join('')
    .toUpperCase();
};
