import { Text, TextProps } from "react-native";

export function HeadingH3Text(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: "Rubik_700Bold",
          fontSize: 32,
          lineHeight: 42,
          letterSpacing: -1,
        },
      ]}
    />
  );
}
