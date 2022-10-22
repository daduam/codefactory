import { Text, TextProps } from "react-native";

export function ParagraphMediumText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        { fontFamily: "Rubik_400Regular", fontSize: 14, lineHeight: 21 },
      ]}
    />
  );
}
