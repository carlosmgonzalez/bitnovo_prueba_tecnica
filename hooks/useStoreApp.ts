import { create } from "zustand";

export enum CurrencyProps {
  USD = "USD",
  EUR = "EUR",
  GBP = "GBP",
}

export enum CountryProps {
  ESPAÑA = "España",
  GUINEA = "Guinea",
  GRECIA = "Grecia",
  GUATEMALA = "Guatemala",
  GUYANA = "Guyana",
  HONGKONG = "Hong Kong",
  HONDURAS = "Honduras",
}
interface AppState {
  currency: CurrencyProps;
  amount: string;
  country: CountryProps;
  identifier: string;
  webUrl: string;
  paymentStatus: string;
  concept: string;
}

interface StoreAppState {
  state: AppState;
  setState: (newState: Partial<AppState>) => void;
}

export const useStoreApp = create<StoreAppState>((set) => ({
  state: {
    currency: CurrencyProps.USD,
    amount: "",
    country: CountryProps.ESPAÑA,
    identifier: "",
    webUrl: "",
    paymentStatus: "pending",
    concept: "",
  },
  setState: (newState) =>
    set((store) => ({
      state: { ...store.state, ...newState },
    })),
}));
