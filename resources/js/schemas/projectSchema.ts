export const projectSchema = [
  { id: 'title', name: 'title', label: 'Title', type: 'text' as const },
  { id: 'link', name: 'link', label: 'Link', type: 'text' as const },
  { id: 'github_link', name: 'github_link', label: 'Github', type: 'text' as const },
  { id: 'description', name: 'description', label: 'Description', type: 'textarea' as const },
  {
    id: 'image',
    name: 'image',
    label: 'Image',
    type: 'file' as const,
    isFile: true,
    currentFileKey: 'image_url',
    currentFileNameKey: 'image_name',
  },
];
