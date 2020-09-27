export const transformPhoneNumbers = (contact) => {
  const mobileNumber = contact.phoneNumbers.find(
    (number) => number.label === 'mobile',
  );
  if (!mobileNumber) {
    return {...contact, phoneNumbers: contact.phoneNumbers[0]};
  } else {
    return {...contact, phoneNumbers: mobileNumber};
  }
};
