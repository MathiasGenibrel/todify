import { StyleSheet } from 'react-native';
import { colors, fontSizes, spacings } from '../../../styles/theme';
import { normalize } from '../../../styles/normalize';

export const baseStyles = StyleSheet.create({
  container: {
    padding: spacings.ml,
    marginHorizontal: normalize(30),
    borderRadius: spacings.s,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    icon: {
      ...baseStyles.icon,
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
    icon: {
      ...baseStyles.icon,
    },
  }),
  tertiary: StyleSheet.create({
    container: {
      ...baseStyles.container,
      marginHorizontal: 0,
      paddingHorizontal: 0,
    },
    text: {
      ...baseStyles.text,
      color: colors.primary,
      fontWeight: '600',
    },
    icon: {
      ...baseStyles.icon,
      color: colors.primary,
      marginRight: spacings.m,
    },
  }),
};
