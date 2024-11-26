import {colors} from '@/theme/colors';
import {spacing} from '@/theme/spacing';

const BASE = {
  letterSpacing: 1.5,
  fontSize: 16,
  marginBottom: spacing[1],
  padding: 16,
};

const OUTLINE = {
  borderBottomWidth: 3,
  borderColor: colors.white,
  color: colors.white,
  fontWeight: 700,
  ...BASE,
};

const PRIMARY = {
  color: colors['light-navy-blue'],
  borderWidth: 1,
  borderColor: colors['light-navy-blue'],
  borderRadius: 3,
  paddingHorizontal: 12,
};

export const presets = {
  default: OUTLINE,
  primary: {
    ...BASE,
    ...PRIMARY,
  },
};
