import { StyleSheet } from 'react-native';
import { fontSizes, spacings } from '../../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    marginRight: spacings.l,
  },
  title: {
    fontSize: fontSizes.xl,
  },
  subtitle: {
    marginTop: spacings.s,
    fontSize: fontSizes.s,
    opacity: 0.6,
  },
});
