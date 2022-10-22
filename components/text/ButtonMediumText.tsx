import { Text, TextProps } from "react-native";

export function ButtonMediumText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        { fontFamily: "Rubik_500Medium", fontSize: 16, lineHeight: 18 },
      ]}
    />
  );
}
