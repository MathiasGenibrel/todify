import { StyleSheet } from 'react-native';
import { colors, fontSizes, spacings } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: spacings['3xl'],
    borderRadius: spacings.s,
    overflow: 'hidden',
  },
  input: {
    backgroundColor: colors.primary,
    flex: 1,
    color: colors.text,
    fontSize: fontSizes.xl,
    marginLeft: spacings.s,
    paddingLeft: spacings.l,
  },
  icon: {
    backgroundColor: colors.primary,
    padding: spacings.ml,
  },
});