import React, {useCallback} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import PropTypes from 'prop-types';

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
  username: {
    color: '#ff970a',
  },
  number: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#616161',
  },
});

const Contact = ({name, thumbnail, info, onPress, isSelected}) => {
  const unSelectedIcon = (
    <Image source={require('../../icons/unchecked_selection.png')} />
  );
  const selectedIcon = (
    <Image source={require('../../icons/checked_selection.png')} />
  );

  const onSelectContact = useCallback(() => {
    onPress && onPress();
  }, [onPress]);

  const placeholder = name
    .split(' ')
    .slice(0, 2)
    .map((x) => x.substr(0, 1))
    .join('')
    .toUpperCase();
  return (
    <Button style={styles.contactStyle} onPress={onSelectContact}>
      <Avatar
        img={thumbnail}
        placeholder={placeholder}
        isSelected={isSelected}
      />
      <View style={styles.contactInfo}>
        <Text
          style={
            name.includes('@dr') ? [styles.name, styles.username] : styles.name
          }>
          {name}
        </Text>
        <Text style={styles.number}>{info}</Text>
      </View>
      {isSelected ? selectedIcon : unSelectedIcon}
    </Button>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.object,
  info: PropTypes.string,
  onPress: PropTypes.func,
};

export default Contact;
