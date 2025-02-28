import { CurrencyProps } from "@/hooks/useStoreApp";

export const symbolCurrency = (currency: CurrencyProps): string => {
  switch (currency) {
    case CurrencyProps.EUR:
      return "€";
    case CurrencyProps.USD:
      return "$";
    case CurrencyProps.GBP:
      return "£";
    default:
      return "$";
  }
};
