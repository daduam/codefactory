import { SvgProps, SvgXml } from "react-native-svg";

export const CoursesIcon = ({ color, ...props }: SvgProps) => {
  const fillColor = String(color);

  const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <path fill="${fillColor}" d="M2.85714 0c-.2 0-.37143.025-.54285.075C1.2.275.314286 1.05.0857143 2.025 0 2.175 0 2.325 0 2.5v13.75C0 18.325 1.91429 20 4.28571 20H20v-2.5H4.28571c-.8 0-1.42857-.55-1.42857-1.25S3.48571 15 4.28571 15H20V1.25C20 .55 19.3714 0 18.5714 0h-1.4285v7.5L14.2857 5l-2.8571 2.5V0H2.85714Z"/>
    </svg>`;

  return <SvgXml {...props} xml={xml} />;
};
