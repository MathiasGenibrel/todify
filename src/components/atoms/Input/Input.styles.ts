import { StyleSheet } from 'react-native';
import { colors, fontSizes, spacings } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: spacings.s,
    overflow: 'hidden',
  },
  input: {
    backgroundColor: '#fff',
    flex: 1,
    color: colors.text,
    fontSize: fontSizes.xl,
    paddingLeft: spacings.l,
    paddingVertical: spacings.ml,
  },
  icon: {
    backgroundColor: '#fff',
    padding: spacings.ml,
    marginRight: spacings.s,
  },
});
