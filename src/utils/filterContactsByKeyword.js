export const filterByKeyword = (key, contacts) => {
  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(key.toLowerCase()) ||
      contact.info.includes(key),
  );
};
