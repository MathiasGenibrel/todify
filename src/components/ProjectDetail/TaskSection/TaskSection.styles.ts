import { StyleSheet } from 'react-native';

import { colors, fontSizes, spacings } from '../../../styles/theme';
import { normalize } from '../../../styles/normalize';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: spacings.m,
    borderBottomWidth: normalize(2),
    borderBottomColor: colors.secondaryBackground,
  },
  text: {
    fontSize: fontSizes.m,
    marginBottom: spacings.xs,
  },
  textNumberTask: {
    fontSize: fontSizes.xs,
    color: colors.textSecondary,
  },
});
