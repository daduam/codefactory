import { Text, TextProps } from "react-native";

export function ButtonSmallText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        { fontFamily: "Rubik_500Medium", fontSize: 14, lineHeight: 16 },
      ]}
    />
  );
}
