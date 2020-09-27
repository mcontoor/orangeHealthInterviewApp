import React, {useCallback, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import CtaButton from '../../components/Button/CtaButton';
import ContactList from '../../components/ContactList/ContactList';
import Contacts from 'react-native-contacts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  contactsTextStyle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  titleStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 13,
    alignItems: 'center',
  },
  inviteTextStyle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
});

const InviteDoctor = () => {
  const [selectedContacts, setSelectedContacts] = useState([]);

  const title = (
    <View style={styles.titleStyle}>
      <Text style={styles.inviteTextStyle}>Invite Contacts</Text>
      <Text style={styles.contactsTextStyle}>
        {selectedContacts.length} contact selected
      </Text>
    </View>
  );

  const onSelectContact = useCallback(
    (contact) =>
      setSelectedContacts((prevContactList) => [...prevContactList, contact]),
    [],
  );

  const [contactList, setContactList] = useState([]);

  const loadContacts = useCallback(() => {
    Contacts.getAll((err, contacts) => {
      if (err === 'denied') {
        console.warn('Permission to access contacts was denied');
      } else {
        setContactList(contacts);
      }
    });
  }, []);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      })
        .then(() => {
          loadContacts();
        })
        .catch((e) => console.log(e));
    } else {
      loadContacts();
    }
  }, [loadContacts]);

  console.log(contactList[10]);

  return (
    <View style={styles.body}>
      <CtaButton />
      <ContactList
        contacts={contactList}
        title={title}
        action={
          selectedContacts.length
            ? {title: 'Call the doc', onPress: () => console.log('call')}
            : undefined
        }
      />
    </View>
  );
};

export default InviteDoctor;
