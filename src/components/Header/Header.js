import React, {useCallback} from 'react';
import {Image, StyleSheet, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  header: {
    height: 74,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: 15,
    marginBottom: 21,
    marginLeft: 20,
    width: 40,
    height: 40,
  },
  backButton: {
    height: 45,
    width: 45,
  },
});

const Header = () => {
  const navigation = useNavigation();
  const onPressBack = useCallback(() => navigation.goBack(), [navigation]);
  return (
    <View style={styles.header}>
      <Pressable style={styles.button} onPress={onPressBack}>
        <Image
          style={styles.backButton}
          source={require('../../icons/back_icon.png')}
        />
      </Pressable>
    </View>
  );
};

export default Header;
