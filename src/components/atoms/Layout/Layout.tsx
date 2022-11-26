import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { colors } from '../../../styles/theme';

const LayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

type LayoutProps = {
  children: JSX.Element;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <View style={LayoutStyles.container}>
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};
