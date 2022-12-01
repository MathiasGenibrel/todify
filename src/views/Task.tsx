import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export const Task = () => {
  return (
    <View style={styles.container}>
      <Text>Task!</Text>
    </View>
  );
};
