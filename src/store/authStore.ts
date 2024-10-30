import { create } from 'zustand';
import { AuthState, User } from '../types';

// This is a mock authentication - in production, use a proper backend
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin',
  },
  {
    id: '2',
    email: 'customer@example.com',
    name: 'Customer User',
    role: 'customer',
  },
];

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: async (email: string, password: string) => {
    const user = mockUsers.find((u) => u.email === email);
    if (user) {
      set({ user });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout: () => set({ user: null }),
}));