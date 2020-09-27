import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';

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
  contactInfo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 17,
  },
  name: {
    fontFamily: 'MontSerrat-Medium',
    fontSize: 16,
    color: '#1c1c1c',
  },
  number: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#616161',
  },
});

const Contact = ({name, thumbnail, number, isSelected, onPress}) => {
  const unSelectedIcon = (
    <Image source={require('../../icons/unchecked_selection.png')} />
  );
  const selectedIcon = (
    <Image source={require('../../icons/checked_selection.png')} />
  );
  const placeholder = name
    .split(' ')
    .slice(0, 2)
    .map((x) => x.substr(0, 1))
    .join('')
    .toUpperCase();
  return (
    <Button style={styles.contactStyle} onPress={onPress}>
      <Avatar img={thumbnail} placeholder={placeholder} />
      <View style={styles.contactInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.number}>{number}</Text>
      </View>
      {isSelected ? selectedIcon : unSelectedIcon}
    </Button>
  );
};

export default Contact;
