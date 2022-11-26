import { StyleSheet } from 'react-native';
import { colors, fontSizes, spacings } from '../../../styles/theme';

export const styles = {
  primary: StyleSheet.create({
    container: {
      backgroundColor: colors.secondary,
      padding: spacings.ml,
      marginHorizontal: spacings['3xl'],
      borderRadius: spacings.s,
    },
    text: {
      fontSize: fontSizes.s,
      alignSelf: 'center',
      fontWeight: '500',
    },
  }),
};
