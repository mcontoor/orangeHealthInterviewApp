import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import Contact from '../Contact/Contact';

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
});

const ContactList = ({title, action, contacts}) => {
  const [searchString, setSearchString] = useState('');

  return (
    <View style={styles.body}>
      {title}
      <SearchBar
        value={searchString}
        onChangeText={setSearchString}
        placeHolder="Search Contacts"
      />
      {contacts.length &&
        contacts.map((contact) => (
          <Contact
            key={contact.recordID}
            name={contact.displayName}
            thumbnail={contact.hasThumbnail ? contact.thumbnailPath : undefined}
            number={contact.phoneNumbers[0]?.number}
            isSelected={false}
            onPress={() => console.log('asasd')}
          />
        ))}
      {action && (
        <Button style={styles.actionButton} onPress={action.onPress}>
          <Text style={styles.actionTextStyle}>{action.title}</Text>
        </Button>
      )}
    </View>
  );
};

export default ContactList;
