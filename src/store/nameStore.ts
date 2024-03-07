import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  firstname: string;
  lastname: string;
};

type Actions = {
  updateFirstName: (firstname: string) => void;
  updateLastName: (lastname: string) => void;
};

export const useNameStore = create<State & Actions>()(
  persist(
    (set) => ({
      firstname: "",
      lastname: "",
      updateFirstName: (firstname) => set({ firstname }),
      updateLastName: (lastname) => set({ lastname }),
    }),
    {
      name: "name-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
