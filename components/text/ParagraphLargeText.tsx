import { Text, TextProps } from "react-native";

export function ParagraphLargeText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: "Rubik_400Regular",
          fontSize: 16,
          lineHeight: 26,
          letterSpacing: -0.5,
        },
      ]}
    />
  );
}
