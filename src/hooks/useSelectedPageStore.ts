import { SelectedPage } from "@/components/shared/types";
import { create } from "zustand";

type SelectedPageStore = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const useSelectePageStore = create<SelectedPageStore>((set) => ({
  selectedPage: SelectedPage.Home,
  setSelectedPage: (value) => set(() => ({ selectedPage: value })),
}));

export default useSelectePageStore;
