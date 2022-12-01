import { StyleSheet } from 'react-native';
import { spacings } from '../../styles/theme';

export const globalView = StyleSheet.create({
  container: {
    marginHorizontal: spacings.l,
  },
});

export const button = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
