const getHashOfString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);
  return hash;
};

const normalizeHash = (hash: number, min: number, max: number) => {
  return Math.floor((hash % (max - min)) + min);
};

const hRange = [0, 360];
const sRange = [50, 75];
const lRange = [25, 60];

const stringToHslColor = (str: string): string => {
  const hash = getHashOfString(str);
  const hue = normalizeHash(hash, hRange[0], hRange[1]);
  const saturation = normalizeHash(hash, sRange[0], sRange[1]);
  const lightness = normalizeHash(hash, lRange[0], lRange[1]);

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export default stringToHslColor;
