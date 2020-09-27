import React, {useCallback, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
} from 'react-native';
import CtaButton from '../../components/Button/CtaButton';
import ContactList from '../../components/ContactList/ContactList';
import Contacts from 'react-native-contacts';
import {transformPhoneNumbers} from '../../utils';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  inviteTextStyle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
  loading: {position: 'absolute', top: 0, bottom: 0, right: 0, left: 0},
});

const InviteDoctor = () => {
  const [contactList, setContactList] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const loadContacts = useCallback(() => {
    Contacts.getAll((err, contacts) => {
      if (err === 'denied') {
        console.warn('Permission to access contacts was denied');
      } else {
        setContactList(contacts.map(transformPhoneNumbers));
        setIsLoading(false);
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

  return (
    <View style={styles.body}>
      <CtaButton />
      {loading ? (
        <ActivityIndicator style={styles.loading} color="#ff970a" />
      ) : (
        <ContactList
          contacts={contactList}
          title={<Text style={styles.inviteTextStyle}>Invite Contacts</Text>}
          action={{
            title: 'Invite on Platform',
            onPress: () => console.log('call'),
          }}
          showSelectedCount={true}
        />
      )}
    </View>
  );
};

export default InviteDoctor;
