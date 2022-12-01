import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/theme';
import { styles } from './Status.styles';
import { StatusContent, StatusDefaultCase } from './Status';

const getColor = (status: StatusContent) => {
  if (status.color) {
    return status.color;
  }

  switch (status.name) {
    case StatusDefaultCase.OPEN:
      return colors.textSecondary;

    case StatusDefaultCase.TODO:
      return colors.warning;

    case StatusDefaultCase.CLOSE:
      return colors.success;

    default:
      return colors.text;
  }
};

export const getContentColor = (status: StatusContent) => {
  const colorToDisplay = getColor(status);

  const customColor = StyleSheet.create({
    selected: { color: colorToDisplay },
  });

  const styleSheetColor =
    status.color !== colors.text
      ? StyleSheet.compose(styles.text, customColor.selected)
      : styles.text;

  return { textColor: styleSheetColor, iconColor: colorToDisplay };
};
