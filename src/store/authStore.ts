import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  isAuthenticated: boolean;
};

type Actions = {
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<State & Actions>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: () => set({ isAuthenticated: true }),
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
