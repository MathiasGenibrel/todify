import React, { FC } from 'react';
import { Modal, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, EButton } from '../Button/Button';
import { colors, spacings } from '../../../styles/theme';

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-start',
  },
  container: {
    paddingHorizontal: spacings.l,
    marginTop: spacings.ml,
    backgroundColor: colors.secondaryBackground,
    borderRadius: spacings.ml,
    shadowColor: colors.text,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    flex: 1,
  },
});

type HeaderProps = {
  toggle: () => void;
};

interface ModalViewProps extends HeaderProps {
  children: JSX.Element | JSX.Element[];
  isOpen: boolean;
}
const Header: FC<HeaderProps> = ({ toggle }) => (
  <View style={styles.header}>
    <Button
      pressHandler={toggle}
      text={'Cancel'}
      type={EButton.TERTIARY}
      marginHorizontal={0}
    />
  </View>
);

export const ModalView: FC<ModalViewProps> = ({ children, isOpen, toggle }) => {
  return (
    <Modal visible={isOpen} animationType={'slide'} transparent={true}>
      <SafeAreaView />
      <View style={styles.container}>
        <Header toggle={toggle} />
        {children}
      </View>
    </Modal>
  );
};
