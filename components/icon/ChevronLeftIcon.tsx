import { SvgProps, SvgXml } from "react-native-svg";

export const ChevronLeftIcon = (props: SvgProps) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#3C3A36" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 14 5 8l6-6"/></svg>`;

  return <SvgXml {...props} xml={xml} />;
};
