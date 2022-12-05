import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Input, InputProps } from '../Input/Input';
import { colors, spacings } from '../../../styles/theme';

const styles = StyleSheet.create({
  text: {
    color: colors.text,
    marginBottom: spacings.s,
  },
});

interface InputWithLayoutProps extends InputProps {
  layoutText: string;
}
export const InputWithLayout: FC<InputWithLayoutProps> = ({
  keyboardType,
  layoutText,
  placeholder,
  secureTextEntry,
  setValue,
  textContentType,
  value,
}) => {
  return (
    <View>
      <Text style={styles.text}>{layoutText}</Text>
      <Input
        placeholder={placeholder}
        value={value}
        setValue={setValue}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        textContentType={textContentType}
      />
    </View>
  );
};
