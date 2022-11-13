import { useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, SmallButton } from "../../components/button";
import { PasswordField, UserDataField } from "../../components/fields";
import { HeadingH4Text, ParagraphMediumText } from "../../components/text";
import Colors from "../../constants/Colors";
import { login } from "../../features/user/user-slice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { AuthStackScreenProps } from "../../types";

export const LoginScreen = ({ navigation }: AuthStackScreenProps<"Login">) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef<TextInput>(null);
  const dispatch = useAppDispatch();

  const handleUserLogin = () => dispatch(login({ email, password }));

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="position">
        <Image
          source={require("../../assets/images/login.png")}
          resizeMode="contain"
          style={styles.image}
        />

        <View style={styles.titleContainer}>
          <HeadingH4Text style={styles.title}>Log in</HeadingH4Text>

          <ParagraphMediumText style={styles.subTitle}>
            Enter login details to continue
          </ParagraphMediumText>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.email}>
            <UserDataField
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.password}>
            <PasswordField
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              ref={passwordRef}
              returnKeyType="send"
              onSubmitEditing={handleUserLogin}
              blurOnSubmit={true}
            />
          </View>

          <SmallButton
            align="middle"
            text="Forgot Password?"
            onPress={() => console.log("Forgot Password?")}
            style={styles.forgotPassword}
          />

          <Button
            level="primary"
            text="Log in"
            onPress={handleUserLogin}
            style={styles.loginButton}
          />
        </View>

        <SmallButton
          align="middle"
          text="Sign up"
          onPress={() => navigation.navigate("Signup")}
          style={styles.signup}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.white,
  },
  image: {
    marginTop: 52,
    width: 343,
    height: 253,
    alignSelf: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  title: {
    color: Colors.light.dark,
  },
  subTitle: {
    marginTop: 8,
    color: Colors.light.darkGray,
  },
  formContainer: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  email: {},
  password: {
    marginTop: 16,
  },
  forgotPassword: {
    marginTop: 16,
  },
  loginButton: {
    marginTop: 16,
  },
  signup: {
    marginTop: 16,
  },
});
