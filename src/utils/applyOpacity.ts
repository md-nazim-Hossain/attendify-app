export const applyOpacity = (color: string, opacity: number) => {
  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = Math.floor(bigint / (256 * 256)) % 256;
    const g = Math.floor(bigint / 256) % 256;
    const b = bigint % 256;
    return {r, g, b};
  };

  if (color.startsWith('#')) {
    const {r, g, b} = hexToRgb(color);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  return color; // Return the original color if it's not in hex
};
