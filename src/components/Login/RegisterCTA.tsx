import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Link } from '../atoms/Link/Link';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export const RegisterCTA = () => {
  return (
    <View style={styles.container}>
      <Text>Don't have an account ?</Text>
      <Link path={'./register'}>Create an account</Link>
    </View>
  );
};
