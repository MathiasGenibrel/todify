import { StyleSheet } from 'react-native';
import { colors, fontSizes, spacings } from '../../../../styles/theme';
import { normalize } from '../../../../styles/normalize';

export const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    left: normalize(12),
    top: normalize(12),
  },
  iconList: {
    padding: spacings.ml,
  },
  baseSelectedColor: {
    height: normalize(28),
    width: normalize(28),
    borderColor: colors.text,
    borderWidth: spacings['2xs'],
    borderRadius: spacings.m,
    backgroundColor: 'none',
  },
});

export const formStyles = StyleSheet.create({
  title: {
    fontSize: fontSizes['2xl'],
    textAlign: 'center',
    paddingBottom: spacings.s,
  },
  subtitle: {
    textAlign: 'center',
    color: colors.textSecondary,
  },
});

export const dropdownStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: spacings.l,
    paddingVertical: spacings.m,
    borderRadius: spacings.s,
  },
});

const defaultViewStyle = StyleSheet.create({
  default: {
    flexDirection: 'row',
    padding: spacings.m,
    alignItems: 'center',
  },
});

export const viewStyles = StyleSheet.create({
  default: {
    ...defaultViewStyle.default,
  },
  text: {
    fontSize: fontSizes.m,
    textTransform: 'capitalize',
  },
  absoluteView: {
    ...defaultViewStyle.default,
    padding: 0,
    position: 'absolute',
    left: normalize(12),
    top: normalize(12),
  },
});
