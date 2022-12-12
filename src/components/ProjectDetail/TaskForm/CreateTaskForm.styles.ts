import { StyleSheet } from 'react-native';
import { colors, fontSizes, spacings } from '../../../styles/theme';

export const formStyle = StyleSheet.create({
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
