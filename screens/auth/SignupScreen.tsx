import { useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { Button, PreviousButton, SmallButton } from "../../components/button";
import { PasswordField, UserDataField } from "../../components/fields";
import { HeadingH4Text, ParagraphMediumText } from "../../components/text";
import Colors from "../../constants/Colors";
import { signup } from "../../features/user/user-slice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { AuthStackScreenProps } from "../../types";

export const SignupScreen = ({
  navigation,
}: AuthStackScreenProps<"Signup">) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const { top } = useSafeAreaInsets();

  const handleUserSignup = () => dispatch(signup({ name, email, password }));

  return (
    <SafeAreaView style={styles.container}>
      {navigation.canGoBack() && (
        <View style={[styles.header, { top }]}>
          <PreviousButton onPress={() => navigation.goBack()} />
        </View>
      )}

      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <Image
            source={require("../../assets/images/signup.png")}
            resizeMode="contain"
            style={styles.image}
          />

          <View style={styles.titleContainer}>
            <HeadingH4Text style={styles.title}>Sign up</HeadingH4Text>

            <ParagraphMediumText style={styles.subTitle}>
              Create your account
            </ParagraphMediumText>
          </View>

          <View style={[styles.formContainer, styles.mt_16]}>
            <View>
              <UserDataField
                value={name}
                onChangeText={setName}
                placeholder="Name"
                textContentType="name"
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current?.focus()}
                blurOnSubmit={false}
              />
            </View>

            <View style={styles.mt_16}>
              <UserDataField
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
                textContentType="emailAddress"
                ref={emailRef}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
                blurOnSubmit={false}
              />
            </View>

            <View style={styles.mt_16}>
              <PasswordField
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                ref={passwordRef}
                returnKeyType="send"
                onSubmitEditing={handleUserSignup}
                blurOnSubmit={true}
              />
            </View>

            <Button
              level="primary"
              text="Sign up"
              onPress={handleUserSignup}
              disabled={user.status === "loading"}
              style={styles.mt_16}
            />
          </View>

          <SmallButton
            align="middle"
            text="Log in"
            onPress={() => navigation.navigate("Login")}
            style={styles.mt_16}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.white,
  },
  header: {
    paddingHorizontal: 16,
    position: "absolute",
    zIndex: 10,
  },
  image: {
    marginTop: 40,
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
    marginHorizontal: 16,
  },
  mt_16: {
    marginTop: 16,
  },
});
