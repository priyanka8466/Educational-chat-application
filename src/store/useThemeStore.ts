// src/store/useThemeStore.ts
import {create} from 'zustand';

interface ThemeState {
  theme: 'light' | 'dark'; // Explicitly define the theme property
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light', // Default theme
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));

export default useThemeStore;