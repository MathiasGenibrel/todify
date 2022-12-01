import { StyleSheet } from 'react-native';
import { colors, fontSizes, spacings } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  title: {
    fontSize: fontSizes['3xl'],
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacings.s,
  },
  subtitle: {
    fontSize: fontSizes.l,
    fontWeight: '600',
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
