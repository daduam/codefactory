import { forwardRef } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import Colors from "../../constants/Colors";

export const UserDataField = forwardRef<TextInput, TextInputProps>(
  (props, ref) => {
    return (
      <TextInput
        placeholderTextColor={Colors.light.darkGray}
        selectionColor={Colors.light.primary}
        {...props}
        ref={ref}
        style={[styles.textInput, styles.textInputText]}
      />
    );
  }
);

const styles = StyleSheet.create({
  textInput: {
    padding: 16,
    backgroundColor: Colors.light.white,
    borderWidth: 1,
    borderColor: Colors.light.gray,
    borderRadius: 12,
  },
  textInputText: {
    fontFamily: "Rubik_400Regular",
    fontSize: 14,
    lineHeight: 21,
    color: Colors.light.darkGray,
  },
});
