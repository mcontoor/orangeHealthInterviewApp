import React from 'react';
import {Pressable, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
});

const Button = ({onPress, children, style}) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default Button;
