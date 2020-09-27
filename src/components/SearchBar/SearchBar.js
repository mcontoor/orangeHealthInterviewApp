import React from 'react';
import {View, StyleSheet, TextInput, Image, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
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
});

const SearchBar = ({value, onChangeText, placeHolder, prefix}) => {
  return (
    <View style={styles.container}>
      {prefix && <Text style={styles.prefix}>{prefix}</Text>}
      <TextInput
        style={styles.searchBar}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeHolder}
        placeholderTextColor="#616161"
      />
      <Image source={require('../../icons/search_icon.png')} />
    </View>
  );
};

export default SearchBar;
