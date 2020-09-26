import React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 22,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: '#fff',
  },
  searchBar: {
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    textAlign: 'left',
    paddingLeft: 24,
    width: '80%',
  },
});

const SearchBar = ({value, onChangeText, placeHolder}) => {
  return (
    <View style={styles.container}>
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
