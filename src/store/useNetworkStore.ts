// src/store/useNetworkStore.ts
import {create} from 'zustand';

interface NetworkState {
  isOnline: boolean;
  setIsOnline: (status: boolean) => void;
}

const useNetworkStore = create<NetworkState>((set) => ({
  isOnline: navigator.onLine,
  setIsOnline: (status) => set({ isOnline: status }),
}));

export default useNetworkStore;