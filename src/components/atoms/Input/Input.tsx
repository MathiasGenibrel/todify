import {
  TextInput,
  TextInputIOSProps,
  TextInputProps,
  View,
} from 'react-native';
import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './Input.styles';
import { normalize } from '../../../styles/normalize';
import { colors } from '../../../styles/theme';

interface InputProps
  extends Pick<TextInputIOSProps, 'textContentType'>,
    Pick<TextInputProps, 'keyboardType' | 'secureTextEntry'> {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  iconName?: string;
  iconStyle?: 'outline' | 'sharp' | 'filled';
}

export const Input: FC<InputProps> = ({
  iconName,
  iconStyle = 'outline',
  keyboardType,
  placeholder,
  secureTextEntry = false,
  setValue,
  textContentType = 'none',
  value,
}) => {
  return (
    <View style={styles.container}>
      {iconName && (
        <Icon
          name={iconStyle === 'filled' ? iconName : `${iconName}-${iconStyle}`}
          size={normalize(20)}
          color={colors.text}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        keyboardType={keyboardType}
        textContentType={textContentType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
