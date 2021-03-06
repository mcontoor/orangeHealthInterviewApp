import React, {useState, useCallback, useMemo, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import Contact from '../Contact/Contact';
import {filterByKeyword} from '../../utils';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 17,
    marginBottom: 20,
    paddingHorizontal: 8,
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
  titleStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 13,
    alignItems: 'center',
  },
  contactsTextStyle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 24,
    color: '#616161',
  },
});

const ContactList = ({
  title,
  action,
  contacts,
  showSelectedCount,
  searchPrefix,
  allowMultipleSelect,
  requiredCharLength,
  emptyStatePlaceholder,
  emptySearchPlaceholder,
  searchPlaceholder,
}) => {
  const [searchString, setSearchString] = useState('');

  const [selectedContacts, setSelectedContacts] = useState({});

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (
      requiredCharLength &&
      searchString &&
      searchString.length < requiredCharLength
    ) {
      setErrorMessage('Please enter 3 or more characters');
    } else {
      setErrorMessage('');
    }
  }, [requiredCharLength, searchString]);

  const onSelectContact = useCallback(
    (contact) => {
      if (allowMultipleSelect) {
        if (selectedContacts[contact.id]) {
          const updatedContacts = {...selectedContacts};
          delete updatedContacts[contact.id];
          setSelectedContacts(updatedContacts);
        } else {
          setSelectedContacts((prevSelectedContacts) => ({
            ...prevSelectedContacts,
            [contact.id]: contact,
          }));
        }
      } else {
        setSelectedContacts((prevContact) => {
          if (prevContact[contact.id]) {
            return {};
          } else {
            return {[`${contact.id}`]: contact};
          }
        });
      }
    },
    [selectedContacts, allowMultipleSelect],
  );

  const filteredContacts = useMemo(() => {
    return filterByKeyword(searchString, contacts, requiredCharLength);
  }, [searchString, contacts, requiredCharLength]);

  const selectedContactsLength = Object.keys(selectedContacts).length;

  const displayEmptyStatePlaceHolder =
    emptyStatePlaceholder && searchString === '' && !filteredContacts.length;

  const displayEmptySearchPlaceholder =
    emptySearchPlaceholder &&
    searchString.length >= requiredCharLength &&
    !filteredContacts.length;

  useEffect(() => {
    if (displayEmptySearchPlaceholder) {
      setSelectedContacts({});
    }
  }, [displayEmptySearchPlaceholder]);

  useEffect(() => {
    if (errorMessage) {
      setSelectedContacts({});
    }
  }, [errorMessage]);

  return (
    <View style={styles.body}>
      <View style={styles.titleStyle}>
        {title}
        {showSelectedCount && (
          <Text style={styles.contactsTextStyle}>
            {selectedContactsLength} contacts selected
          </Text>
        )}
      </View>

      <SearchBar
        value={searchString}
        onChangeText={setSearchString}
        placeHolder={searchPlaceholder}
        prefix={searchPrefix}
        error={errorMessage}
      />
      {displayEmptyStatePlaceHolder ? (
        emptyStatePlaceholder
      ) : displayEmptySearchPlaceholder ? (
        emptySearchPlaceholder
      ) : (
        <FlatList
          style={styles.listStyle}
          data={filteredContacts}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => (
            <Contact
              key={item.id}
              name={item.name}
              thumbnail={
                item.hasThumbnail ? {uri: item.thumbnailPath} : undefined
              }
              info={item.info}
              onPress={() => onSelectContact(item)}
              isSelected={!!selectedContacts[item.id]}
            />
          )}
        />
      )}
      {!!selectedContactsLength && (
        <Button style={styles.actionButton} onPress={action.onPress}>
          <Text style={styles.actionTextStyle}>{action.title}</Text>
        </Button>
      )}
    </View>
  );
};

ContactList.propTypes = {
  title: PropTypes.element,
  action: PropTypes.object,
  contacts: PropTypes.array,
  showSelectedCount: PropTypes.bool,
  searchPrefix: PropTypes.string,
  allowMultipleSelect: PropTypes.bool,
  requiredCharLength: PropTypes.number,
  emptyStatePlaceholder: PropTypes.element,
  emptySearchPlaceholder: PropTypes.element,
  searchPlaceholder: PropTypes.string,
};

ContactList.defaultProps = {
  searchPlaceholder: 'Search Contacts',
};

export default ContactList;
