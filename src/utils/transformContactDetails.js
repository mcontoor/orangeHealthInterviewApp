export const transformContactDetails = (contact) => {
  const transformedContact = {
    ...contact,
    id: contact.recordID,
    name: contact.displayName,
    info: contact.phoneNumbers[0]?.number,
  };
  const mobileNumber = contact.phoneNumbers.find(
    (number) => number.label === 'mobile',
  );
  if (mobileNumber) {
    transformedContact.info = mobileNumber?.number;
  }
  return transformedContact;
};
