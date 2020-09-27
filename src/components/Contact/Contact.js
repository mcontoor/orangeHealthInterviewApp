import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../Button/Button';

const styles = StyleSheet.create({
  contactStyle: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
    height: 67,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    backgroundColor: 'blue',
    height: '100%',
  },
  contactInfo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 17,
  },
});

const Contact = ({name, thumbnail, number, isSelected, onPress}) => {
  console.log(name, number, thumbnail);

  const unSelectedIcon = (
    <Image source={require('../../icons/unchecked_selection.png')} />
  );
  const selectedIcon = (
    <Image source={require('../../icons/checked_selection.png')} />
  );
  return (
    <Button style={styles.contactStyle} onPress={onPress}>
      <View style={styles.avatar} />
      <View style={styles.contactInfo}>
        <Text>{name}</Text>
        <Text>{number}</Text>
      </View>
      {isSelected ? selectedIcon : unSelectedIcon}
    </Button>
  );
};

export default Contact;
