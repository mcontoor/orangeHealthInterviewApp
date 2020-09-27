import React from 'react';
import {View, StyleSheet, TextInput, Image, Text, Keyboard} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 52,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 22,
    paddingLeft: 24,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: '#fff',
  },
  searchBar: {
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    textAlign: 'left',
    width: '80%',
  },
  prefix: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
  errorText: {
    color: '#ec2637',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    marginTop: 16,
    textAlign: 'center',
  },
});

const SearchBar = ({value, onChangeText, placeHolder, prefix, error}) => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        {prefix && <Text style={styles.prefix}>{prefix}</Text>}
        <TextInput
          style={styles.searchBar}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeHolder}
          placeholderTextColor="#616161"
          onBlur={() => Keyboard.dismiss()}
        />
        <Image source={require('../../icons/search_icon.png')} />
      </View>
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  placeHolder: PropTypes.string,
  prefix: PropTypes.string,
  error: PropTypes.string,
};

export default SearchBar;
