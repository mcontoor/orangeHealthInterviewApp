export const transformDrContactDetails = (contact) => {
  return {
    ...contact,
    info: contact.name,
    name: `@dr.${contact.username}`,
    hasThumbnail: true,
    thumbnailPath:
      'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600052/58451144-doctor-icon-woman-female-lady-doctor-icon-in-glyph-vector-illustration-.jpg',
  };
};
