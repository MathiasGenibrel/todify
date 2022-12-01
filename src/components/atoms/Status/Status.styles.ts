import { StyleSheet } from 'react-native';
import { colors, spacings } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: spacings.s,
    color: colors.text,
    textTransform: 'capitalize',
  },
});
