import React, {useCallback} from 'react';
import {Image, StyleSheet, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  header: {
    height: 68,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: 18,
    marginBottom: 21,
    marginLeft: 24,
    width: 40,
  },
  backButton: {
    height: 40,
    width: 40,
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
