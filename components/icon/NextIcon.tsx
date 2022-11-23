import { SvgProps, SvgXml } from "react-native-svg";

export const NextIcon = (props: SvgProps) => {
  const color = String(props.color || "#3C3A36");

  const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" fill="none">
      <path stroke=${color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 17 8-8-8-8"/>
    </svg>`;

  return <SvgXml {...props} xml={xml} />;
};
