import { StyleSheet } from 'react-native';
import { colors, fontSizes, spacings } from '../../../styles/theme';
import { normalize } from '../../../styles/normalize';

export const baseStyles = StyleSheet.create({
  container: {
    padding: spacings.ml,
    marginHorizontal: spacings['3xl'],
    borderRadius: spacings.s,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: fontSizes.s,
    alignSelf: 'flex-end',
  },
  icon: {
    marginRight: normalize(16),
    color: colors.text,
  },
});

export const styles = {
  primary: StyleSheet.create({
    container: {
      ...baseStyles.container,
      backgroundColor: colors.primary,
    },
    text: {
      ...baseStyles.text,
      color: colors.background,
      fontWeight: '500',
    },
  }),
  secondary: StyleSheet.create({
    container: {
      ...baseStyles.container,
      backgroundColor: colors.secondary,
    },
    text: {
      ...baseStyles.text,
      color: colors.text,
      fontWeight: '500',
    },
  }),
  tertiary: StyleSheet.create({
    container: {
      ...baseStyles.container,
      opacity: 0.6,
    },
    text: {
      ...baseStyles.text,
      color: colors.text,
      fontWeight: '600',
    },
  }),
};
