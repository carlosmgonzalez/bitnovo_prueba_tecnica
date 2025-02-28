import { CountryProps } from "@/hooks/useStoreApp";
import IconFlagEspana from "@/assets/icons/flag_españa.svg";
import IconFlagGuinea from "@/assets/icons/flag_guinea.svg";
import IconFlagGrecia from "@/assets/icons/flag_guinea.svg";
import IconFlagInglaterra from "@/assets/icons/flag_inglaterra.svg";
import IconFlagGuatemala from "@/assets/icons/flag_guatemala.svg";
import IconFlagGuyana from "@/assets/icons/flag_honduras.svg";
import IconFlagHonduras from "@/assets/icons/flag_guyana.svg";
import IconFlagHongKong from "@/assets/icons/flag_hong_kong.svg";

export const countryInfo = (country: CountryProps) => {
  switch (country) {
    case CountryProps.ESPAÑA:
      return {
        icon: <IconFlagEspana />,
        sufijo: "+34",
        name: "España",
      };
    case CountryProps.GUINEA:
      return {
        icon: <IconFlagGuinea />,
        sufijo: "+240",
        name: "Equatorial Guinea",
      };
    case CountryProps.GRECIA:
      return {
        icon: <IconFlagGrecia />,
        sufijo: "+30",
        name: "Grecia",
      };
    case CountryProps.GUATEMALA:
      return {
        icon: <IconFlagGuatemala />,
        sufijo: "+502",
        name: "Guatemala",
      };
    case CountryProps.GUYANA:
      return {
        icon: <IconFlagGuyana />,
        sufijo: "+592",
        name: "Guyana",
      };
    case CountryProps.GUYANA:
      return {
        icon: <IconFlagGuyana />,
        sufijo: "+592",
        name: "Guyana",
      };
    case CountryProps.HONGKONG:
      return {
        icon: <IconFlagHongKong />,
        sufijo: "+852",
        name: "Hong Kong",
      };
    case CountryProps.HONDURAS:
      return {
        icon: <IconFlagHonduras />,
        sufijo: "+504",
        name: "Honduras",
      };

    default:
      return {
        icon: <IconFlagEspana />,
        sufijo: "+34",
        name: "España",
      };
  }
};
