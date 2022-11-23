import { SvgProps, SvgXml } from "react-native-svg";

export const SettingsEmailIcon = (props: SvgProps) => {
  const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="none">
      <path fill="#fff" fill-rule="evenodd" d="M1.4.5h11.2c.77 0 1.4.61875 1.4 1.375v8.25c0 .7562-.63 1.375-1.4 1.375H1.4c-.77 0-1.4-.6188-1.4-1.375v-8.25C0 1.11875.63.5 1.4.5Zm5.6 6 6-3.57143V1.5L7 5.07143 1 1.5v1.42857L7 6.5Z" clip-rule="evenodd"/>
    </svg>`;

  return <SvgXml {...props} xml={xml} />;
};
