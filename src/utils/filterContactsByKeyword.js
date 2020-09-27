export const filterByKeyword = (key, contacts, requiredCharLength) => {
  if (key.length >= requiredCharLength) {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(key.toLowerCase()) ||
        contact.info?.includes(key.toLowerCase()),
    );
  } else {
    return [];
  }
};
