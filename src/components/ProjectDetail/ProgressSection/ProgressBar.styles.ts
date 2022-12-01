import { StyleSheet } from 'react-native';
import { spacings } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  background: {
    backgroundColor: '#fff',
    borderRadius: spacings.m,
    height: spacings.s,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
