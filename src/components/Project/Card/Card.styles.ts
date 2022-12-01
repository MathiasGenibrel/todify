import { StyleSheet } from 'react-native';
import { colors, fontSizes, spacings } from '../../../styles/theme';

export const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: spacings.xl,
    borderRadius: spacings.ml,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: spacings.l,
    marginBottom: spacings.l,
    borderBottomColor: colors.background,
    borderBottomWidth: spacings.xs,
  },
  goal: {
    fontSize: fontSizes.xl,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
