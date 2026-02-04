import { User, UserRole, ContactMessage, GalleryImage } from '../types';

// Initial Data
const INITIAL_USERS: User[] = [
  {
    id: 'admin-1',
    name: 'Ritesh Rokade',
    username: 'admin',
    email: 'admin@rokade.com',
    password: 'Rokadeaihub',
    role: UserRole.ADMIN,
    createdAt: new Date().toISOString()
  },
  {
    id: 'student-1',
    name: 'Rahul Patil',
    username: 'rahul123',
    email: 'student@rokade.com',
    password: 'student',
    role: UserRole.STUDENT,
    createdAt: new Date().toISOString()
  }
];

const INITIAL_GALLERY: GalleryImage[] = [
  { 
    id: '1', 
    url: 'https://image2url.com/r2/default/images/1770132730784-72a697e9-687c-4e32-b18c-472b8f4f8ad0.jpeg', 
    alt: 'Student Activity' 
  },
  { 
    id: '2', 
    url: 'https://image2url.com/r2/default/images/1770132308876-bea97bf5-e785-4e34-b0c2-5b89ac8ae43e.jpeg', 
    alt: 'Ritesh Rokade with Students' 
  },
  { 
    id: '3', 
    url: 'https://picsum.photos/id/60/400/300', 
    alt: 'Tech Workshop' 
  },
  { 
    id: '4', 
    url: 'https://image2url.com/r2/default/images/1770132996209-2cbe4a81-38c1-4822-a7fc-e3949611e461.jpeg', 
    alt: 'Classroom Learning' 
  },
  { 
    id: '5', 
    url: 'https://image2url.com/r2/default/images/1770133404025-f63515d6-6793-4653-adeb-b6be7ea5349e.jpeg', 
    alt: 'Student Projects' 
  }
];

// Local Storage Helper
const getTable = <T>(tableName: string): T[] => {
  const data = localStorage.getItem(`rokade_db_${tableName}`);
  return data ? JSON.parse(data) : [];
};

const setTable = <T>(tableName: string, data: T[]) => {
  localStorage.setItem(`rokade_db_${tableName}`, JSON.stringify(data));
};

export const dbService = {
  init: () => {
    const users = getTable<User>('users');
    
    // Check if users table is empty OR if the admin user is missing the 'username' field (legacy data check)
    const adminUser = users.find(u => u.role === UserRole.ADMIN);
    const isDataStale = adminUser && !adminUser.username;

    if (users.length === 0 || isDataStale) {
      console.log('Resetting database to support Username login...');
      setTable('users', INITIAL_USERS);
    }
    
    // Fix: Only set INITIAL_GALLERY if the key doesn't exist at all. 
    // This allows the user to have an empty gallery if they delete everything.
    if (localStorage.getItem('rokade_db_gallery') === null) {
      setTable('gallery', INITIAL_GALLERY);
    }
  },

  findUserByEmail: (email: string): User | undefined => {
    const users = getTable<User>('users');
    return users.find(u => u.email === email);
  },

  findUserByUsername: (username: string): User | undefined => {
    const users = getTable<User>('users');
    return users.find(u => u.username.toLowerCase() === username.toLowerCase());
  },

  createUser: (user: User): User => {
    const users = getTable<User>('users');
    users.push(user);
    setTable('users', users);
    return user;
  },

  updateUserPassword: (username: string, newPassword: string): boolean => {
    const users = getTable<User>('users');
    const userIndex = users.findIndex(u => u.username === username);
    
    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      setTable('users', users);
      return true;
    }
    return false;
  },

  getAllUsers: (): User[] => {
    return getTable<User>('users');
  },

  saveMessage: (data: Omit<ContactMessage, 'id' | 'date'>) => {
    const messages = getTable<ContactMessage>('messages');
    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      ...data,
      date: new Date().toISOString()
    };
    messages.push(newMessage);
    setTable('messages', messages);
  },

  // Gallery Methods
  getGalleryImages: (): GalleryImage[] => {
    // Return what is in storage. If null (not set), return INITIAL.
    const data = localStorage.getItem('rokade_db_gallery');
    if (data) {
      return JSON.parse(data);
    }
    return INITIAL_GALLERY;
  },

  addGalleryImage: (image: GalleryImage) => {
    const images = dbService.getGalleryImages(); // Get current view (storage or initial)
    images.push(image);
    setTable('gallery', images); // Save to storage
  },

  removeGalleryImage: (id: string) => {
    const images = dbService.getGalleryImages(); // Get current view (storage or initial)
    const newImages = images.filter(img => img.id !== id);
    setTable('gallery', newImages); // Save to storage
  }
};