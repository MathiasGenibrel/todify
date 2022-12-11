import { StyleSheet } from 'react-native';
import { colors, fontSizes, spacings } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: spacings.l,
    paddingVertical: spacings.m,
    borderRadius: spacings.s,
  },
  text: {
    paddingLeft: spacings.s,
    color: colors.text,
    fontSize: fontSizes.l,
    textTransform: 'capitalize',
  },
  label: {
    marginBottom: spacings.s,
  },
});
