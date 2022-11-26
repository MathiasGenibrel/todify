import React, { FC } from 'react';
import { Image, StyleSheet } from 'react-native';

import { normalize } from '../../../styles/normalize';
import { spacings } from '../../../styles/theme';

type CompanyBrandProps = {
  size: number;
};

export const CompanyBrand: FC<CompanyBrandProps> = ({ size }) => {
  const LoginStyles = StyleSheet.create({
    image: {
      height: normalize(size),
      width: normalize(size),
      alignSelf: 'center',
      marginBottom: spacings['6xl'],
      marginTop: spacings['3xl'],
    },
  });

  return (
    <Image
      style={LoginStyles.image}
      source={require('../../../../public/assets/companyLogoWithoutName.png')}
    />
  );
};
