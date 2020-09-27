import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const styles = StyleSheet.create({
  img: {
    borderRadius: 40,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  container: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  placeholder: {
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
  },
  selectedStyle: {
    borderWidth: 2,
    borderColor: '#01b37a',
  },
});

const Avatar = ({img, placeholder, isSelected}) => {
  const renderImg = () => {
    return <Image style={styles.img} source={img} />;
  };

  const renderPlaceholder = () => {
    return <Text style={styles.placeholder}>{placeholder}</Text>;
  };

  return (
    <View
      style={
        isSelected ? [styles.container, styles.selectedStyle] : styles.container
      }>
      {img ? renderImg() : renderPlaceholder()}
    </View>
  );
};

export default Avatar;
