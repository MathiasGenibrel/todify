import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Link } from '../atoms/Link/Link';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export const SignInCTA = () => {
  return (
    <View style={styles.container}>
      <Text>Already have an account ?</Text>
      <Link path={'Login'}>Logged in</Link>
    </View>
  );
};
