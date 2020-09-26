import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../SearchBar/SearchBar';

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 25,
    marginBottom: 20,
  },
});

const ContactList = ({title, action}) => {
  const [searchString, setSearchString] = useState('');

  return (
    <View style={styles.body}>
      {title}
      <SearchBar
        value={searchString}
        onChangeText={setSearchString}
        placeHolder="Search Contacts"
      />
      <Text>Contact list component</Text>
      {action}
    </View>
  );
};

export default ContactList;
