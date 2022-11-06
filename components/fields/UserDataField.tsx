import { StyleSheet, TextInput, TextInputProps } from "react-native";
import Colors from "../../constants/Colors";

type UserDataFieldProps = {} & TextInputProps;

export const UserDataField = ({ ...props }: UserDataFieldProps) => {
  return (
    <TextInput
      placeholderTextColor={Colors.light.darkGray}
      selectionColor={Colors.light.primary}
      {...props}
      style={[styles.textInput, styles.textInputText]}
    />
  );
};

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
