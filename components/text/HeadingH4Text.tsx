import { Text, TextProps } from "react-native";

export function HeadingH4Text(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: "Rubik_500Medium",
          fontSize: 24,
          lineHeight: 32,
          letterSpacing: -0.5,
        },
      ]}
    />
  );
}
