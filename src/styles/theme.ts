import { normalize } from './normalize';

export const colors = {
  primary: '#0B7FAD',
  secondary: '#D9F2FD',
  tertiary: '#540D6E',

  background: '#FFF2F1',
  text: '#1B1725',
};

export const fontSizes = {
  /**
   * normalize(12) => 12px
   */
  xs: normalize(12),
  /**
   * normalize(14) => 14px
   */
  s: normalize(14),
  /**
   * normalize(16) => 16px
   */
  m: normalize(16),
  /**
   * normalize(18) => 18px
   */
  l: normalize(18),
  /**
   * normalize(20) => 20px
   */
  xl: normalize(20),
  /**
   * normalize(24) => 24px
   */
  '2xl': normalize(24),
  /**
   * normalize(30) => 30px
   */
  '3xl': normalize(30),
  /**
   * normalize(36) => 36px
   */
  '4xl': normalize(36),
  /**
   * normalize(48) => 48px
   */
  '5xl': normalize(48),
  /**
   * normalize(60) => 60px
   */
  '6xl': normalize(60),
};

/**
 * Return pixel ratio normalized
 */
export const spacings = {
  /**
   * normalize(2) => 2px
   */
  xs: normalize(2),
  /**
   * normalize(4) => 4px
   */
  s: normalize(4),
  /**
   * normalize(8) => 8px
   */
  m: normalize(8),
  /**
   * normalize(12) => 12px
   */
  ml: normalize(12),
  /**
   * normalize(16) => 16px
   */
  l: normalize(16),
  /**
   * normalize(20) => 20px
   */
  xl: normalize(20),
  /**
   * normalize(24) => 24px
   */
  '2xl': normalize(24),
  /**
   * normalize(30) => 30px
   */
  '3xl': normalize(30),
  /**
   * normalize(36) => 36px
   */
  '4xl': normalize(36),
  /**
   * normalize(48) => 48px
   */
  '5xl': normalize(48),
  /**
   * normalize(60) => 60px
   */
  '6xl': normalize(60),
};
