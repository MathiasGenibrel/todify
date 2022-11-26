import { Dimensions, PixelRatio } from 'react-native';

// this file is used to make responsive design, article: "https://antoinemesnil.hashnode.dev/best-practices-for-styling-react-native-apps#heading-1-theming"

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

// base on iphone 11 pro's scale

const scaleWidth = SCREEN_WIDTH / 375;
const scaleHeight = SCREEN_HEIGHT / 812;

export const normalize = (size: number, forHeight?: boolean) => {
  const newSize = size * (forHeight ? scaleHeight : scaleWidth);

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
