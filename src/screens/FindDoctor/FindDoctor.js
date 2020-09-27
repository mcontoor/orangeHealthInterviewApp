import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ContactList from '../../components/ContactList/ContactList';
import {transformDrContactDetails} from '../../utils';
import EmptyStatePlaceholder from '../../components/Placeholder/EmptyStatePlaceholder';
import EmptySearchPlaceholder from '../../components/Placeholder/EmptySearchPlaceholder';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  inviteTextStyle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
  },
});

const FindDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setDoctors(data.map(transformDrContactDetails)));
  }, []);

  return (
    <View style={styles.body}>
      <ContactList
        title={
          <Text style={styles.inviteTextStyle}>
            Search by Orange ID or name
          </Text>
        }
        contacts={doctors}
        action={{
          title: 'Connect with doctor',
          onPress: () => console.log('connect'),
        }}
        searchPrefix={'@dr.'}
        allowMultipleSelect={false}
        requiredCharLength={3}
        emptyStatePlaceholder={<EmptyStatePlaceholder />}
        emptySearchPlaceholder={<EmptySearchPlaceholder />}
      />
    </View>
  );
};

export default FindDoctor;
