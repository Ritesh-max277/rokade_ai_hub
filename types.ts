export enum UserRole {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT'
}

export interface User {
  id: string;
  name: string;
  username: string; // Added username field
  email: string;
  password?: string; // In a real app, never store plain text. Using local mock for demo.
  role: UserRole;
  createdAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  level: string;
  image: string;
}

export interface Registration {
  id: string;
  userId: string;
  courseId: string;
  courseName: string; // Denormalized for easier display
  studentName: string; // Denormalized
  studentEmail: string; // Denormalized
  date: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}