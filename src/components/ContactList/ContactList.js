import React, {useState, useCallback, useMemo} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import Contact from '../Contact/Contact';
import {filterByKeyword} from '../../utils';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 25,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#ff970a',
    shadowColor: '#94ff970a',
    elevation: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    position: 'absolute',
    bottom: 0,
  },
  actionTextStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: '#ffffff',
    paddingVertical: 23,
    zIndex: 2,
  },
  listStyle: {width: '100%', marginTop: 14},
});

const ContactList = ({title, action, contacts}) => {
  const [searchString, setSearchString] = useState('');

  const [selectedContacts, setSelectedContacts] = useState({});

  const onSelectContact = useCallback(
    (contact) => {
      if (selectedContacts[contact.recordID]) {
        const updatedContacts = {...selectedContacts};
        delete updatedContacts[contact.recordID];
        setSelectedContacts(updatedContacts);
      } else {
        setSelectedContacts((prevSelectedContacts) => ({
          ...prevSelectedContacts,
          [contact.recordID]: contact,
        }));
      }
    },
    [selectedContacts],
  );

  const filteredContacts = useMemo(
    () => filterByKeyword(searchString, contacts),
    [searchString, contacts],
  );

  const selectedContactsLength = Object.keys(selectedContacts).length;

  return (
    <View style={styles.body}>
      {title}
      <SearchBar
        value={searchString}
        onChangeText={setSearchString}
        placeHolder="Search Contacts"
      />
      <FlatList
        style={styles.listStyle}
        data={filteredContacts}
        keyExtractor={(item) => item.recordID}
        renderItem={({item}) => (
          <Contact
            key={item.recordID}
            name={item.displayName}
            thumbnail={
              item.hasThumbnail ? {uri: item.thumbnailPath} : undefined
            }
            number={item.phoneNumbers?.number}
            onPress={() => onSelectContact(item)}
          />
        )}
      />
      {!!selectedContactsLength && (
        <Button style={styles.actionButton} onPress={action.onPress}>
          <Text style={styles.actionTextStyle}>{action.title}</Text>
        </Button>
      )}
    </View>
  );
};

export default ContactList;
