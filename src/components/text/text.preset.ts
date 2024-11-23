import {colors} from '@/theme/colors';
import {typography} from '@/theme/typography';

const BASE = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: colors.white,
};

const BASE_BOLD = {
  fontFamily: typography.primaryBold,
  fontSize: 16,
  color: colors.white,
};

const BOLD = {
  fontFamily: typography.primaryExtraBold,
  color: colors.white,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 20,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 18,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 16,
  },
  h5: {
    ...BASE_BOLD,
    fontSize: 14,
  },
  small: {
    ...BASE,
    fontSize: 12,
  },
  xsmall: {
    ...BASE,
    fontSize: 10,
  },
};
