import React, { forwardRef, useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import Colors from "../../constants/Colors";
import { useAutoHitSlop } from "../../hooks/useAutoHitSlop";
import { PasswordIcon } from "../icon";

export const PasswordField = forwardRef<TextInput, TextInputProps>(
  (props, ref) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const { hitSlop, onLayout } = useAutoHitSlop();

    const toggleSecureTextEntry = () => setSecureTextEntry(!secureTextEntry);

    return (
      <View style={styles.wrapper}>
        <TextInput
          {...props}
          ref={ref}
          style={styles.textInput}
          placeholderTextColor={Colors.light.darkGray}
          selectionColor={Colors.light.primary}
          secureTextEntry={secureTextEntry}
          textContentType="password"
        />

        <Pressable
          onPress={toggleSecureTextEntry}
          style={styles.icon}
          hitSlop={hitSlop}
          onLayout={onLayout}
        >
          <PasswordIcon kind={secureTextEntry ? "show" : "hide"} />
        </Pressable>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: Colors.light.white,
    borderWidth: 1,
    borderColor: Colors.light.gray,
    borderRadius: 12,
  },
  textInput: {
    flex: 1,
    fontFamily: "Rubik_400Regular",
    fontSize: 14,
    lineHeight: 21,
    color: Colors.light.darkGray,
  },
  icon: {
    marginLeft: 16,
  },
});
