import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/theme';
import { normalize } from '../../../styles/normalize';

export const styles = StyleSheet.create({
  text: {
    color: colors.primary,
    fontWeight: '600',
    marginLeft: normalize(4),
  },
});
