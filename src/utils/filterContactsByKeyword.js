export const filterByKeyword = (key, contacts) => {
  return contacts.filter(
    (contact) =>
      contact.displayName.toLowerCase().includes(key.toLowerCase()) ||
      contact.phoneNumbers?.number.includes(key),
  );
};
