import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const styles = StyleSheet.create({
  img: {
    borderRadius: 40,
    alignSelf: 'center',
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
});

const Avatar = ({img, placeholder}) => {
  const renderImg = () => {
    return <Image style={styles.img} source={img} />;
  };

  const renderPlaceholder = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.placeholder}>{placeholder}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {img ? renderImg() : renderPlaceholder()}
    </View>
  );
};

export default Avatar;
