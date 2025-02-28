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

interface StoreAppState {
  currency: CurrencyProps;
  setCurrency: (curr: CurrencyProps) => void;
  amount: string;
  setAmount: (amount: string) => void;
  country: CountryProps;
  setCountry: (country: CountryProps) => void;
  identifier: string;
  setIdentifier: (id: string) => void;
  webUrl: string;
  setWebUrl: (webUrl: string) => void;
  paymentStatus: string;
  setPaymentStatus: (status: string) => void;
}

export const useStoreApp = create<StoreAppState>()((set) => {
  return {
    currency: CurrencyProps.USD,
    setCurrency: (currency) => set(() => ({ currency })),
    amount: "",
    setAmount: (amount) => set(() => ({ amount })),
    country: CountryProps.ESPAÑA,
    setCountry: (country) => set(() => ({ country })),
    identifier: "",
    setIdentifier: (identifier) => set(() => ({ identifier })),
    webUrl: "",
    setWebUrl: (webUrl) => set(() => ({ webUrl })),
    paymentStatus: "pending",
    setPaymentStatus: (paymentStatus) => set(() => ({ paymentStatus })),
  };
});
