import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CtaButton from '../../components/Button/CtaButton';
import ContactList from '../../components/ContactList/ContactList';

const styles = StyleSheet.create({
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

  return (
    <View>
      <CtaButton />
      <ContactList title={title} />
    </View>
  );
};

export default InviteDoctor;
