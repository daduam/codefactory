import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import Colors from "../../constants/Colors";
import { HeadingH4Text, ParagraphMediumText } from "../text";

type OnboardingContentProps = {
  text: string;
  title: string;
  image: ImageSourcePropType;
} & ViewProps;

export const OnboardingContent = ({
  text,
  title,
  image,
  ...props
}: OnboardingContentProps) => {
  return (
    <View {...props} style={[props.style, styles.container]}>
      <Image source={image} resizeMode="contain" style={styles.image} />

      <View style={styles.body}>
        <HeadingH4Text style={styles.bodyTitle}>{title}</HeadingH4Text>

        <ParagraphMediumText style={styles.bodyText}>
          {text}
        </ParagraphMediumText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 375,
    height: 264,
  },
  body: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  bodyTitle: {
    height: 72,
    justifyContent: "flex-end",
    textAlign: "center",
    textAlignVertical: "bottom",
    color: Colors.light.dark,
  },
  bodyText: {
    height: 64,
    textAlign: "center",
    textAlignVertical: "top",
    color: Colors.light.darkGray,
    marginTop: 8,
  },
});
