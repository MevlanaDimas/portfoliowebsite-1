export const aboutSchema = [
  {
    id: 'photo',
    name: 'photo',
    label: 'Photo',
    type: 'file' as const,
    isFile: true,
    currentFileKey: 'photo_url',   // dynamic mapping for backend file info
    currentFileNameKey: 'photo_name',
  },
  {
    id: 'bio',
    name: 'bio',
    label: 'Bio',
    type: 'textarea' as const,
  },
];
