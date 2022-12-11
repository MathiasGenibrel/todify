import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button, EButton } from '../Button/Button';

import { spacings } from '../../../styles/theme';

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-start',
    marginBottom: spacings.l,
  },
  container: {
    paddingHorizontal: spacings.l,
    paddingTop: spacings.ml,
  },
});

interface ModalViewProps {
  children: JSX.Element | JSX.Element[];
}

const Header: FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Button
        pressHandler={() => navigation.goBack()}
        text={'Cancel'}
        type={EButton.TERTIARY}
        marginHorizontal={0}
      />
    </View>
  );
};

export const ModalView: FC<ModalViewProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      {children}
    </View>
  );
};
